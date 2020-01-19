package com.nerfums.nerfumsservice.service.mappers;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.api.UserDO;

@Component
public class UserServiceMapper
{
    private final ModelMapper modelMapper;

    @Autowired
    public UserServiceMapper(ModelMapper modelMapper)
    {
        super();
        this.modelMapper = modelMapper;
    }

    @PostConstruct
    public void addMappings()
    {
        //UserDO -> User
        addMappingUserDOToUser(modelMapper);

        //User -> UserDO
        addMappingUserToUserDO(modelMapper);
    }

    public User mapUserDOToUser(UserDO userDO)
    {
        return modelMapper.map(userDO, User.class);
    }

    public UserDO mapUserToUserDO(User user)
    {
        return modelMapper.map(user, UserDO.class);
    }

    private void addMappingUserDOToUser(ModelMapper modelMapper) {
		modelMapper.typeMap(UserDO.class, User.class)
				.addMapping(UserDO::getUserId, User::setUserId)
				.addMapping(UserDO::getDisplayName, User::setDisplayName)
				.addMapping(UserDO::getAvailableCash, User::setAvailableCash);
	}

    private void addMappingUserToUserDO(ModelMapper modelMapper)
    {
        modelMapper.typeMap(User.class, UserDO.class);
    }
}
