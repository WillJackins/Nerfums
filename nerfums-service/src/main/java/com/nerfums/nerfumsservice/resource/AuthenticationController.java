package com.nerfums.nerfumsservice.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nerfums.nerfumsservice.delegate.AuthenticationDelegate;
import com.nerfums.nerfumsservice.resource.api.LoginRO;
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

	@PostMapping("/login")
	public ResponseEntity<SessionRO> userLogin(@RequestBody LoginRO login) {
		SessionRO session = authenticationDelegate.userLogin(login);
		return ResponseEntity.ok(session);
	}
}
