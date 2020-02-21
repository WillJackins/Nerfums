package com.nerfums.nerfumsservice.resource;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.nerfums.nerfumsservice.delegate.UserDelegate;
import com.nerfums.nerfumsservice.resource.api.UserRO;

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

	@PatchMapping("/client/avatar")
	public ResponseEntity<UserRO> updateUserAvatar(@RequestHeader("Authorization") String token, @RequestParam("file") MultipartFile file) {
		token = token.substring(7);
		UserRO userRO = userDelegate.updateUserAvatar(token, file);
		return ResponseEntity.ok(userRO);
	}

	@PatchMapping("/client/displayName")
	public ResponseEntity<UserRO> updateUserDisplayName(@RequestHeader("Authorization") String token, @RequestBody String newDisplayName) {
		token = token.substring(7);
		UserRO userRO = userDelegate.updateUserDisplayName(token, newDisplayName);
		return ResponseEntity.ok(userRO);
	}

	@PatchMapping("/client/password")
	public ResponseEntity<UserRO> updateUserPassword(@RequestHeader("Authorization") String token, @RequestBody String newPassword) {
		token = token.substring(7);
		UserRO userRO = userDelegate.updateUserPassword(token, newPassword);
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
	public ResponseEntity<UserRO> createNewUser(@RequestBody UserRO userRO) throws IOException {
		UserRO createdUser = userDelegate.createNewUser(userRO);
        return ResponseEntity.ok(createdUser);
    }
}
