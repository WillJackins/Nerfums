package com.nerfums.nerfumsservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nerfums.nerfumsservice.delegate.authentication.AuthenticationUtil;
import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.AmazonS3ClientRepository;
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

	private static final String AMAZON_S3_AVATAR_ROOT = "https://nerfums-avatar.s3.amazonaws.com/";
	private static final String DEFAULT_AVATAR = "default-avatar.jpg";
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

	public User createNewUser(User user) {

		user.setUserAvatarURL(AMAZON_S3_AVATAR_ROOT + DEFAULT_AVATAR);
		user.setAvailableCash(STARTING_MONEY);
		user.setCommittedCash(0);
		UserDO preCreatedUserDO = userServiceMapper.mapUserToUserDO(user);

		UserDO postCreatedUserDO = userRepository.save(preCreatedUserDO);
		return userServiceMapper.mapUserDOToUser(postCreatedUserDO);
	}

	public User updateUserMoney(User updatedUser) {

		UserDO newUser = userServiceMapper.mapUserToUserDO(updatedUser);
		UserDO oldUser = userRepository.getOne(updatedUser.getUserId());

		oldUser.setDisplayName(newUser.getDisplayName() != null ? newUser.getDisplayName() : oldUser.getDisplayName());
		oldUser.setAvailableCash(newUser.getAvailableCash() != null ? newUser.getAvailableCash() : oldUser.getAvailableCash());
		oldUser.setCommittedCash(newUser.getCommittedCash() != null ? newUser.getCommittedCash() : oldUser.getCommittedCash());

		UserDO postUpdateUser = userRepository.save(oldUser);
		return userServiceMapper.mapUserDOToUser(postUpdateUser);
	}

	public User updateUserAvatar(String userToken, MultipartFile file) {

		User user = getUserByToken(userToken);
		String avatarPath = "avatar_" + user.getUserId() + ".png";
		amazonS3ClientRepository.uploadFileToS3Bucket(avatarPath, file);

		UserDO updatedUser = userServiceMapper.mapUserToUserDO(user);
		updatedUser.setUserAvatarURL(AMAZON_S3_AVATAR_ROOT + avatarPath);
		userRepository.save(updatedUser);

		return userServiceMapper.mapUserDOToUser(updatedUser);
	}

	public User updateUserDisplayName(String userToken, String newDisplayName) {

		User user = getUserByToken(userToken);
		UserDO updatedUser = userServiceMapper.mapUserToUserDO(user);
		updatedUser.setDisplayName(newDisplayName);
		userRepository.save(updatedUser);

		return userServiceMapper.mapUserDOToUser(updatedUser);
	}

	public User updateUserPassword(String userToken, String newPassword) {

		User user = getUserByToken(userToken);
		UserDO updatedUser = userServiceMapper.mapUserToUserDO(user);
		//updatedUser.setPasswordHash(passwordEncoder.encode(newPassword));
		userRepository.save(updatedUser);

		return userServiceMapper.mapUserDOToUser(updatedUser);
	}
}
