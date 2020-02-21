package com.nerfums.nerfumsservice.delegate;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.nerfums.nerfumsservice.delegate.mappers.UserDelegateMapper;
import com.nerfums.nerfumsservice.model.User;
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

	public UserRO createNewUser(UserRO userRO) throws IOException {
		User preCreatedUser = userDelegateMapper.mapUserROToUser(userRO);
		User postCreatedUser = userService.createNewUser(preCreatedUser);
		return userDelegateMapper.mapUserToUserRO(postCreatedUser);
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
}
