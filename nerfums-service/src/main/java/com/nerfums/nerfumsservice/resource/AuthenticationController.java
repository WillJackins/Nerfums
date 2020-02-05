package com.nerfums.nerfumsservice.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nerfums.nerfumsservice.delegate.authentication.AuthenticationDelegate;
import com.nerfums.nerfumsservice.resource.api.LoginRO;
import com.nerfums.nerfumsservice.resource.api.RegisterRO;
import com.nerfums.nerfumsservice.resource.api.SessionRO;

@RestController
@RequestMapping("authentication")
public class AuthenticationController {

	AuthenticationDelegate authenticationDelegate;

	@Autowired
	public AuthenticationController(AuthenticationDelegate authenticationDelegate) {
		super();
		this.authenticationDelegate = authenticationDelegate;
	}

	@PostMapping("/register")
	public ResponseEntity<SessionRO> registerUser(@RequestBody RegisterRO registerUser) {
		SessionRO session = authenticationDelegate.registerUser(registerUser);
		return ResponseEntity.ok(session);
	}

	@PostMapping("/login")
	public ResponseEntity<SessionRO> userLogin(@RequestBody LoginRO login) {
		SessionRO session = authenticationDelegate.userLogin(login);
		return ResponseEntity.ok(session);
	}

	@GetMapping("/refresh")
	public ResponseEntity<SessionRO> refreshLogin(@RequestHeader("Authorization") String token) {
		System.out.println("REFRESH: " + token);
		token = token.substring(7);
		SessionRO newSession = authenticationDelegate.userRefresh(token);
		return ResponseEntity.ok(newSession);
	}

	@GetMapping("/logout")
	public ResponseEntity<String> userLogout() {
		return ResponseEntity.ok("Logged Out.");
	}
}
