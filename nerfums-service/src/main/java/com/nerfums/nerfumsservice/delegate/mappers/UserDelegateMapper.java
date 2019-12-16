package com.nerfums.nerfumsservice.delegate.mappers;

import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.resource.api.UserRO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class UserDelegateMapper
{
    private final ModelMapper modelMapper;

    @Autowired
    public UserDelegateMapper(ModelMapper modelMapper)
    {
        super();
        this.modelMapper = modelMapper;
    }

    @PostConstruct
    public void addMappings()
    {
        //User -> UserRO
        addMappingUserToUserRO(modelMapper);

        //UserRO -> User
        addMappingUserROToUser(modelMapper);
    }

    public UserRO mapUserToUserRO(User user)
    {
        return modelMapper.map(user, UserRO.class);
    }

    public User mapUserROToUser(UserRO userRO)
    {
        return modelMapper.map(userRO, User.class);
    }

    private void addMappingUserToUserRO(ModelMapper modelMapper)
    {
        modelMapper.typeMap(User.class, UserRO.class);
    }

    private void addMappingUserROToUser(ModelMapper modelMapper)
    {
        modelMapper.typeMap(UserRO.class, User.class);
    }
}
