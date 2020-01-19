package com.nerfums.nerfumsservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.google.common.base.Charsets;
import com.google.common.hash.HashCode;
import com.google.common.hash.HashFunction;
import com.google.common.hash.Hashing;
import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.model.Session;
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

    public Session userLogin(String username, String password) {
        UserDO userDO = userRepository.getUserByUsername(username);

        if (userDO == null) {
            //Throw User not found exception
            return null;
        }

        HashFunction encrypt = Hashing.sha256();
        HashCode code = encrypt.newHasher().putString(password, Charsets.US_ASCII).hash();
        String codeString = code.toString();

        if (!codeString.equals(userDO.getPasswordHash())) {
            //Throw incorrect password exception
            return null;
        }

        //Temp token
        String token = "Token?";
        User user = userServiceMapper.mapUserDOToUser(userDO);

        return new Session(token, user);
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                       .map(userServiceMapper::mapUserDOToUser)
                       .orElseThrow(() -> new BusinessServiceException("User not found.", NerfumsErrorCode.NO_USER));
    }

    public List<User> getAllUsers() {
        return ((List<UserDO>)userRepository.findAll()).stream()
                .map(userServiceMapper::mapUserDOToUser)
                .collect(Collectors.toList());
    }

    public User createNewUser(User user) {
        UserDO preCreatedUserDO = userServiceMapper.mapUserToUserDO(user);
        UserDO postCreatedUserDO = userRepository.save(preCreatedUserDO);

        return userServiceMapper.mapUserDOToUser(postCreatedUserDO);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //TODO Fix
        User user = new User("TEST_USERNAME", "TEST_PASSWORD");
        return user;

//        UserDO userDO = userRepository.getUserByUsername(username);
//
//        if(userDO == null)
//            throw new UsernameNotFoundException("Could not find user: " + username);
//
//        return userServiceMapper.mapUserDOToUser(userDO);
    }
}
