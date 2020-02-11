package com.nerfums.nerfumsservice.resource;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import com.nerfums.nerfumsservice.delegate.UserDelegate;
import com.nerfums.nerfumsservice.resource.api.UserRO;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;

@RestController
@RequestMapping("users")
public class UserController {
	private final UserDelegate userDelegate;

	@Autowired
	public UserController(UserDelegate userDelegate) {
		super();
		this.userDelegate = userDelegate;
	}

	@GetMapping("/client")
	public ResponseEntity<UserRO> getClientUser(@RequestHeader("Authorization") String token) {
		token = token.substring(7);
		UserRO userRO = userDelegate.getUserByToken(token);
		return ResponseEntity.ok(userRO);
	}

	@GetMapping("/{userId}")
	public ResponseEntity<UserRO> getUserById(@PathVariable Long userId) {
		UserRO userRO = userDelegate.getUserById(userId);
		return ResponseEntity.ok(userRO);
	}

	@GetMapping
	public ResponseEntity<List<UserRO>> getAllUsers() {
		List<UserRO> users = userDelegate.getAllUsers();
		return ResponseEntity.ok(users);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<UserRO> createNewUser(@RequestBody UserRO userRO) {
		UserRO createdUser = userDelegate.createNewUser(userRO);
        return ResponseEntity.ok(createdUser);
    }

    @PostMapping("/upload")
	public ResponseEntity<String> uploadAvatarImage(@RequestHeader("Authorization") String token, @RequestParam("file") MultipartFile file) {
		token = token.substring(7);
		System.out.println("recieved");
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		Path path = Paths.get("src/main/resources/avatars/" + fileName);
		try {
			Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e){
			e.printStackTrace();
		}
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
				.path("/files/download")
				.path(fileName)
				.toUriString();
		return ResponseEntity.ok(fileDownloadUri);
	}

	@GetMapping("/download/{fileName}")
	public ResponseEntity downloadFileFromLocal(@PathVariable String fileName) {
		Path path = Paths.get("src/main/resources/avatars/" + fileName);
		Resource resource = null;
		try {
			resource = new UrlResource(path.toUri());
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(MediaType.IMAGE_PNG_VALUE))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}
}
