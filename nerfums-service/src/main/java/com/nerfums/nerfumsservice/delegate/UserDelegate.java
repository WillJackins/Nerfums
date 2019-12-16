package com.nerfums.nerfumsservice.delegate;

import com.nerfums.nerfumsservice.delegate.mappers.UserDelegateMapper;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.resource.api.UserRO;
import com.nerfums.nerfumsservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserDelegate
{
    private final UserDelegateMapper userDelegateMapper;
    private final UserService userService;

    @Autowired
    public UserDelegate(UserDelegateMapper userDelegateMapper, UserService userService)
    {
        super();
        this.userDelegateMapper = userDelegateMapper;
        this.userService = userService;
    }

    public UserRO getUserById(Long userId)
    {
        return userDelegateMapper.mapUserToUserRO(userService.getUserById(userId));
    }

    public List<UserRO> getAllUsers()
    {
        return userService.getAllUsers().stream()
                .map(userDelegateMapper::mapUserToUserRO)
                .collect(Collectors.toList());
    }

    public UserRO createNewUser(UserRO userRO)
    {
        User preCreatedUser = userDelegateMapper.mapUserROToUser(userRO);
        User postCreatedUser = userService.createNewUser(preCreatedUser);
        return userDelegateMapper.mapUserToUserRO(postCreatedUser);
    }


}
