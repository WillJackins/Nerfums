package com.nerfums.nerfumsservice.delegate.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.delegate.mappers.UserDelegateMapper;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.resource.api.LoginRO;
import com.nerfums.nerfumsservice.resource.api.SessionRO;
import com.nerfums.nerfumsservice.resource.api.UserRO;
import com.nerfums.nerfumsservice.service.UserService;

@Component
public class AuthenticationDelegate {
	private UserDelegateMapper userDelegateMapper;

	private AuthenticationManager authenticationManager;
	private AuthenticationUtil authenticationUtil;
	private UserService userService;

	@Autowired
	public AuthenticationDelegate(UserDelegateMapper userDelegateMapper, AuthenticationManager authenticationManager, AuthenticationUtil authenticationUtil, UserService userService) {
		super();
		this.userDelegateMapper = userDelegateMapper;

		this.authenticationManager = authenticationManager;
		this.authenticationUtil = authenticationUtil;
		this.userService = userService;
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
