package com.nerfums.nerfumsservice.service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.Base64;
import com.amazonaws.util.IOUtils;
import com.nerfums.nerfumsservice.repository.AmazonS3ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nerfums.nerfumsservice.delegate.authentication.AuthenticationUtil;
import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.UserRepository;
import com.nerfums.nerfumsservice.repository.api.UserDO;
import com.nerfums.nerfumsservice.service.mappers.UserServiceMapper;

import common.exception.BusinessServiceException;

@Service
public class UserService implements UserDetailsService {
	private final UserServiceMapper userServiceMapper;
	private final UserRepository userRepository;
	private final AuthenticationUtil authenticationUtil;
	private final AmazonS3ClientRepository amazonS3ClientRepository;
	private static final Integer STARTING_MONEY = 10000;

	@Autowired
	public UserService(UserServiceMapper userServiceMapper, UserRepository userRepository, AuthenticationUtil authenticationUtil, AmazonS3ClientRepository amazonS3ClientRepository) {
		super();
		this.userServiceMapper = userServiceMapper;
		this.userRepository = userRepository;
		this.authenticationUtil = authenticationUtil;
		this.amazonS3ClientRepository = amazonS3ClientRepository;
	}

	public User getUserByToken(String token) {
		String username = authenticationUtil.extractUsername(token);
		return (User) loadUserByUsername(username);
	}

	public User getUserById(Long userId) {
		return userRepository.findById(userId)
					   .map(userServiceMapper::mapUserDOToUser)
					   .orElseThrow(() -> new BusinessServiceException("User not found.", NerfumsErrorCode.NO_USER));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		UserDO userDO = userRepository.getUserByUsername(username);

		if (userDO == null) {
			throw new UsernameNotFoundException("Could not find user: " + username);
		}

		return userServiceMapper.mapUserDOToUser(userDO);
	}

	public List<User> getAllUsers() {
		return userRepository.findAll().stream()
					   .map(userServiceMapper::mapUserDOToUser)
					   .collect(Collectors.toList());
	}

	public User createNewUser(User user) throws IOException {


		user.setUserAvatar("default-avatar.jpg");
		user.setAvailableCash(STARTING_MONEY);
		user.setCommittedCash(0);
		UserDO preCreatedUserDO = userServiceMapper.mapUserToUserDO(user);

		UserDO postCreatedUserDO = userRepository.save(preCreatedUserDO);

		S3Object s3Object = this.amazonS3ClientRepository.downloadFileFromS3Bucket(postCreatedUserDO.getUserAvatar());
		byte[] avatarBytes = IOUtils.toByteArray(s3Object.getObjectContent());
		String encodedAvatar = Base64.encodeAsString(avatarBytes);

		postCreatedUserDO.setUserAvatar(encodedAvatar);
		return userServiceMapper.mapUserDOToUser(postCreatedUserDO);
	}

	public User updateUser(User updatedUser) {
		UserDO newUser = userServiceMapper.mapUserToUserDO(updatedUser);
		UserDO oldUser = userRepository.getOne(updatedUser.getUserId());

		oldUser.setDisplayName(newUser.getDisplayName() != null ? newUser.getDisplayName() : oldUser.getDisplayName());
		oldUser.setAvailableCash(newUser.getAvailableCash() != null ? newUser.getAvailableCash() : oldUser.getAvailableCash());
		oldUser.setCommittedCash(newUser.getCommittedCash() != null ? newUser.getCommittedCash() : oldUser.getCommittedCash());

		UserDO postUpdateUser = userRepository.save(oldUser);
		return userServiceMapper.mapUserDOToUser(postUpdateUser);
	}
}
