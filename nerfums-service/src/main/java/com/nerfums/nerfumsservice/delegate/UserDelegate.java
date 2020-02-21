package com.nerfums.nerfumsservice.delegate;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.nerfums.nerfumsservice.delegate.mappers.UserDelegateMapper;
import com.nerfums.nerfumsservice.model.Session;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.resource.api.LoginRO;
import com.nerfums.nerfumsservice.resource.api.RegisterRO;
import com.nerfums.nerfumsservice.resource.api.SessionRO;
import com.nerfums.nerfumsservice.resource.api.UserRO;
import com.nerfums.nerfumsservice.service.UserService;

@Component
public class UserDelegate {
	private final UserDelegateMapper userDelegateMapper;
	private final UserService userService;

	@Autowired
	public UserDelegate(UserDelegateMapper userDelegateMapper, UserService userService) {
		super();
		this.userDelegateMapper = userDelegateMapper;
		this.userService = userService;
	}


	public SessionRO registerUser(RegisterRO registerUser) {
		User user = userDelegateMapper.mapRegisterROToUser(registerUser);
		Session session = userService.registerNewUser(user);
		return userDelegateMapper.mapSessionToSessionRO(session);
	}

	public SessionRO loginUser(LoginRO loginUser) {
		String username = loginUser.getUsername();
		String password = loginUser.getPassword();
		Session session = userService.loginUser(username, password);
		return userDelegateMapper.mapSessionToSessionRO(session);
	}

	public SessionRO refreshUser(String token) {
		Session session = userService.refreshUser(token);
		return userDelegateMapper.mapSessionToSessionRO(session);
	}


	public UserRO updateUserAvatar(String userToken, MultipartFile file) {
		User updatedUser = userService.updateUserAvatar(userToken, file);
		return userDelegateMapper.mapUserToUserRO(updatedUser);
	}

	public UserRO updateUserDisplayName(String userToken, String newDisplayName) {
		User updatedUser = userService.updateUserDisplayName(userToken, newDisplayName);
		return userDelegateMapper.mapUserToUserRO(updatedUser);
	}

	public UserRO updateUserPassword(String userToken, String newPassword) {
		User updatedUser = userService.updateUserPassword(userToken, newPassword);
		return userDelegateMapper.mapUserToUserRO(updatedUser);
	}

	public UserRO getUserByToken(String token) {
		return userDelegateMapper.mapUserToUserRO(userService.getUserByToken(token));
	}

	public UserRO getUserById(Long userId) {
		return userDelegateMapper.mapUserToUserRO(userService.getUserById(userId));
	}

	public List<UserRO> getAllUsers() {
		return userService.getAllUsers().stream()
					   .map(userDelegateMapper::mapUserToUserRO)
					   .collect(Collectors.toList());
	}
}
