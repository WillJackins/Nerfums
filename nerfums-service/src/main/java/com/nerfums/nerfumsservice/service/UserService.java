package com.nerfums.nerfumsservice.service;

import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.UserRepository;
import com.nerfums.nerfumsservice.repository.api.UserDO;
import com.nerfums.nerfumsservice.service.mappers.UserServiceMapper;
import common.exception.BusinessServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService
{
    private final UserServiceMapper userServiceMapper;
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserServiceMapper userServiceMapper, UserRepository userRepository)
    {
        super();
        this.userServiceMapper = userServiceMapper;
        this.userRepository = userRepository;
    }

    public User getUserById(Long userId)
    {
        return userRepository.findById(userId)
                .map(userServiceMapper::mapUserDOToUser)
                .orElseThrow(() -> new BusinessServiceException("User not found.", NerfumsErrorCode.NO_USER));
    }

    public List<User> getAllUsers()
    {
        return ((List<UserDO>)userRepository.findAll()).stream()
                .map(userServiceMapper::mapUserDOToUser)
                .collect(Collectors.toList());
    }

    public User createNewUser(User user)
    {
        UserDO preCreatedUserDO = userServiceMapper.mapUserToUserDO(user);
        UserDO postCreatedUserDO = userRepository.save(preCreatedUserDO);

        return userServiceMapper.mapUserDOToUser(postCreatedUserDO);
    }


}
