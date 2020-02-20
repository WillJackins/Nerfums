package com.nerfums.nerfumsservice.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/avatars")
public class AmazonS3FileController {
//    private AmazonS3ClientService amazonS3ClientService;
//    @Autowired
//    public AmazonS3FileController(AmazonS3ClientService amazonS3ClientService) {
//        super();
//        this.amazonS3ClientService = amazonS3ClientService;
//    }
//
//
//    @PostMapping
//    public ResponseEntity<String> uploadFile(@RequestPart(value = "file") MultipartFile file)
//    {
//        this.amazonS3ClientService.uploadFileToS3Bucket(file, false);
//
//        return ResponseEntity.ok("file [" + file.getOriginalFilename() + "] uploading request submitted successfully.");
//    }
//
//    @DeleteMapping
//    public Map<String, String> deleteFile(@RequestParam("file_name") String fileName)
//    {
//        this.amazonS3ClientService.deleteFileFromS3Bucket(fileName);
//
//        Map<String, String> response = new HashMap<>();
//        response.put("message", "file [" + fileName + "] removing request submitted successfully.");
//
//        return response;
//    }
//
//    @GetMapping
//    public ResponseEntity<String> getUserAvatar() throws IOException {
//        S3Object s3Object = this.amazonS3ClientService.downloadFileFromS3Bucket("Star-Wars-High-Ground-Time-Feature-Image-04172017.jpg");
//        byte[] avatar = IOUtils.toByteArray(s3Object.getObjectContent());
//        return ResponseEntity.ok(Base64.encodeAsString(avatar));
//    }
}
