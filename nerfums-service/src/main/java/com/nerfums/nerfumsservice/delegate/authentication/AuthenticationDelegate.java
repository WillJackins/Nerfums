package com.nerfums.nerfumsservice.delegate.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.delegate.mappers.UserDelegateMapper;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.resource.api.LoginRO;
import com.nerfums.nerfumsservice.resource.api.RegisterRO;
import com.nerfums.nerfumsservice.resource.api.SessionRO;
import com.nerfums.nerfumsservice.resource.api.UserRO;
import com.nerfums.nerfumsservice.service.UserService;

@Component
public class AuthenticationDelegate {
	private UserDelegateMapper userDelegateMapper;
	private UserService userService;

	private AuthenticationManager authenticationManager;
	private AuthenticationUtil authenticationUtil;
	private PasswordEncoder passwordEncoder;


	@Autowired
	public AuthenticationDelegate(UserDelegateMapper userDelegateMapper, AuthenticationManager authenticationManager, AuthenticationUtil authenticationUtil, UserService userService, PasswordEncoder passwordEncoder) {
		super();
		this.userDelegateMapper = userDelegateMapper;
		this.userService = userService;

		this.authenticationManager = authenticationManager;
		this.authenticationUtil = authenticationUtil;
		this.passwordEncoder = passwordEncoder;
	}

	public SessionRO registerUser(RegisterRO registerUser) {
		User userToCreate = userDelegateMapper.mapRegisterROToUser(registerUser);
		userToCreate.setPassword(passwordEncoder.encode(userToCreate.getPassword()));

		User newUser = userService.createNewUser(userToCreate);
		String token = authenticationUtil.generateToken(newUser);
		UserRO userRO = userDelegateMapper.mapUserToUserRO(newUser);

		return new SessionRO(token, userRO);
	}

	public SessionRO userLogin(LoginRO login) throws BadCredentialsException {
		Authentication authentication = new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());
		authenticationManager.authenticate(authentication);

		User user = (User) userService.loadUserByUsername(login.getUsername());
		String token = authenticationUtil.generateToken(user);
		UserRO userRO = userDelegateMapper.mapUserToUserRO(user);

		return new SessionRO(token, userRO);
	}

	
}
