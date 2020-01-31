package com.nerfums.nerfumsservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

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

    @Autowired
    public UserService(UserServiceMapper userServiceMapper, UserRepository userRepository) {
        super();
		this.userServiceMapper = userServiceMapper;
		this.userRepository = userRepository;
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
		return ((List<UserDO>) userRepository.findAll()).stream()
					   .map(userServiceMapper::mapUserDOToUser)
					   .collect(Collectors.toList());
	}

	public User createNewUser(User user) {
		UserDO preCreatedUserDO = userServiceMapper.mapUserToUserDO(user);
		UserDO postCreatedUserDO = userRepository.save(preCreatedUserDO);

        return userServiceMapper.mapUserDOToUser(postCreatedUserDO);
    }
}
