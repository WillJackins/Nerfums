package com.nerfums.nerfumsservice.delegate.mappers;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.model.Session;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.resource.api.RegisterRO;
import com.nerfums.nerfumsservice.resource.api.SessionRO;
import com.nerfums.nerfumsservice.resource.api.UserRO;

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
    public void addMappings() {
		//RegisterRO -> User
		addMappingRegisterROToUser(modelMapper);

		// Session -> SessionRO
		addMappingSessionToSessionRO(modelMapper);

		//User -> UserRO
		addMappingUserToUserRO(modelMapper);

		//UserRO -> User
		addMappingUserROToUser(modelMapper);
	}

	public User mapRegisterROToUser(RegisterRO registerRO) {
		return modelMapper.map(registerRO, User.class);
	}

	public SessionRO mapSessionToSessionRO(Session session) {
		return modelMapper.map(session, SessionRO.class);
	}

	public UserRO mapUserToUserRO(User user) {
		return modelMapper.map(user, UserRO.class);
	}

	public User mapUserROToUser(UserRO userRO) {
		return modelMapper.map(userRO, User.class);
	}


	private void addMappingRegisterROToUser(ModelMapper modelMapper) {
		modelMapper.typeMap(RegisterRO.class, User.class)
				.addMapping(RegisterRO::getDisplayName, User::setDisplayName)
				.addMapping(RegisterRO::getUsername, User::setUsername)
				.addMapping(RegisterRO::getPassword, User::setPassword);
	}

	private void addMappingSessionToSessionRO(ModelMapper modelMapper) {
		modelMapper.typeMap(Session.class, SessionRO.class);
	}

	private void addMappingUserToUserRO(ModelMapper modelMapper) {
		modelMapper.typeMap(User.class, UserRO.class);
	}

	private void addMappingUserROToUser(ModelMapper modelMapper) {
		modelMapper.typeMap(UserRO.class, User.class)
				.addMappings(mapper -> mapper.skip(User::setAvailableCash))
				.addMappings(mapper -> mapper.skip(User::setCommittedCash));
	}
}
