package com.nerfums.nerfumsservice.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.nerfums.nerfumsservice.dataFactory.UserDataFactory;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.UserRepository;
import com.nerfums.nerfumsservice.repository.api.UserDO;
import com.nerfums.nerfumsservice.service.mappers.UserServiceMapper;

import common.exception.BusinessServiceException;

public class UserServiceTests {
	private static UserRepository mockRepository;
	private static PasswordEncoder mockEncoder;
	private static UserServiceMapper mockMapper;
	private static UserService spyService;

	@BeforeAll
	static void beforeAll() {
		mockRepository = mock(UserRepository.class);
		mockEncoder = mock(PasswordEncoder.class);
		mockMapper = mock(UserServiceMapper.class);
		spyService = spy(new UserService(mockMapper, mockRepository, null, null));
	}

	@Test
	void getUserByIdTest()
	{
		User expectedUser = UserDataFactory.generateRandomUser();

		when(mockRepository.findById(anyLong())).thenReturn(Optional.of(UserDataFactory.generateRandomUserDO()));
		when(mockMapper.mapUserDOToUser(any(UserDO.class))).thenReturn(expectedUser);

		// When
		User actualUser = spyService.getUserById(1L);

		// Then
		assertNotNull(actualUser);
	}

	@Test
	void getUserByIdTest_NotFoundFail()
	{
		when(mockRepository.findById(anyLong())).thenReturn(Optional.of(UserDataFactory.generateRandomUserDO()));
		when(mockMapper.mapUserDOToUser(any(UserDO.class))).thenReturn(null);

		assertThrows(BusinessServiceException.class, () -> spyService.getUserById(0L));
	}

	@Test
	void getAllUsersTest()
	{
		// Given
		User expectedUser = UserDataFactory.generateRandomUser();

		when(mockRepository.findAll()).thenReturn(Arrays.asList(UserDataFactory.generateRandomUserDO()));
		when(mockMapper.mapUserDOToUser(any(UserDO.class))).thenReturn(expectedUser);

		// When
		List<User> actualUsers = spyService.getAllUsers();

		// Then
		assertNotNull(actualUsers);
	}

	@Test
	void createNewUserTest()
	{
		// Given
		User user = UserDataFactory.generateRandomUser();
		UserDO userDO = UserDataFactory.generateRandomUserDO();

		when(mockRepository.save(any(UserDO.class))).thenReturn(UserDataFactory.generateRandomUserDO());
		when(mockMapper.mapUserToUserDO(any(User.class))).thenReturn(userDO);
		when(mockMapper.mapUserDOToUser(any(UserDO.class))).thenReturn(user);

		// When
		//User actualUser = spyService.createNewUser(user);

		// Then
		//assertNotNull(actualUser);
	}
}
