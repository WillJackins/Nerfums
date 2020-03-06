package com.nerfums.nerfumsservice.repository;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.regions.Region;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Component
public class AmazonS3ClientRepository {
    private String awsS3AudioBucket;
    private AmazonS3 amazonS3;
    private static final Logger logger = LoggerFactory.getLogger(AmazonS3ClientRepository.class);

    @Autowired
    public AmazonS3ClientRepository(Region awsRegion, AWSCredentialsProvider awsCredentialsProvider, String awsS3AudioBucket)
    {
        this.amazonS3 = AmazonS3ClientBuilder.standard()
                .withCredentials(awsCredentialsProvider)
                .withRegion(awsRegion.getName()).build();
        this.awsS3AudioBucket = awsS3AudioBucket;
    }

    @Async
    public void uploadFileToS3Bucket(String fileName, MultipartFile multipartFile) {
        File file = new File(fileName);

        try (FileOutputStream copyStream = new FileOutputStream(file)) {
            //creating the file in the server (temporarily)
            copyStream.write(multipartFile.getBytes());
        }
        catch (IOException ex) {
            logger.error("error [{}] occurred while uploading [{}] ", ex.getMessage(), fileName);
        }

        try {
            PutObjectRequest putObjectRequest = new PutObjectRequest(this.awsS3AudioBucket, fileName, file);
            putObjectRequest.withCannedAcl(CannedAccessControlList.PublicRead);
            this.amazonS3.putObject(putObjectRequest);
        }
        catch (AmazonServiceException ex) {
            logger.error("error [{}] occurred while uploading [{}] ", ex.getMessage(), fileName);
        }

        try {
            Files.delete(file.toPath());
        }
        catch (IOException ex) {
            logger.error("error [{}] occurred while uploading [{}] ", ex.getMessage(), fileName);
        }
    }

    @Async
    public void deleteFileFromS3Bucket(String fileName)
    {
        try {
            amazonS3.deleteObject(new DeleteObjectRequest(awsS3AudioBucket, fileName));
        } catch (AmazonServiceException ex) {
            logger.error("error [{}] occurred while deleting [{}] ", ex.getMessage(), fileName);
        }
    }
}
