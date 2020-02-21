package com.nerfums.nerfumsservice.delegate;

import com.nerfums.nerfumsservice.dataFactory.UserDataFactory;
import com.nerfums.nerfumsservice.delegate.mappers.UserDelegateMapper;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.resource.api.UserRO;
import com.nerfums.nerfumsservice.service.UserService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

public class UserDelegateTests
{
	private static UserService mockService;
	private static UserDelegateMapper mockMapper;
	private static UserDelegate spyDelegate;

	@BeforeAll
	static void beforeTests()
	{
		mockService = mock(UserService.class);
		mockMapper = mock(UserDelegateMapper.class);
		spyDelegate = spy(new UserDelegate(mockMapper, mockService));
	}

	@Test
	void getUserByIdTest()
	{
		// Given
		UserRO expectedUser = UserDataFactory.generateRandomUserRO();

		when(mockService.getUserById(anyLong())).thenReturn(UserDataFactory.generateRandomUser());
		when(mockMapper.mapUserToUserRO(any(User.class))).thenReturn(expectedUser);

		// When
		UserRO actualUser = spyDelegate.getUserById(1L);

		// Then
		assertNotNull(actualUser);
	}

	@Test
	void getAllUsersTest()
	{
		// Given
		UserRO expectedUser = UserDataFactory.generateRandomUserRO();

		when(mockService.getAllUsers()).thenReturn(Arrays.asList(UserDataFactory.generateRandomUser()));
		when(mockMapper.mapUserToUserRO(any(User.class))).thenReturn(expectedUser);

		// When
		List<UserRO> actualUsers = spyDelegate.getAllUsers();

		// Then
		assertNotNull(actualUsers);
	}

	@Test
	void createNewUserTest()
	{
		// Given
		UserRO expectedUserRO = UserDataFactory.generateRandomUserRO();
		User expectedUser = UserDataFactory.generateRandomUser();

		when(mockMapper.mapUserROToUser(any(UserRO.class))).thenReturn(expectedUser);
		//when(mockService.createNewUser(any(User.class))).thenReturn(expectedUser);
		when(mockMapper.mapUserToUserRO(any(User.class))).thenReturn(expectedUserRO);


		// When
		//UserRO actualUser = spyDelegate.createNewUser(expectedUserRO);

		// Then
		//assertNotNull(actualUser);
	}
}
