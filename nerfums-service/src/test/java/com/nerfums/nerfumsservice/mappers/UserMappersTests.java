package com.nerfums.nerfumsservice.mappers;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import com.nerfums.nerfumsservice.dataFactory.UserDataFactory;
import com.nerfums.nerfumsservice.delegate.mappers.UserDelegateMapper;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.api.UserDO;
import com.nerfums.nerfumsservice.resource.api.UserRO;
import com.nerfums.nerfumsservice.service.mappers.UserServiceMapper;

public class UserMappersTests
{
	private static UserDelegateMapper userDelegateMapper;
	private static UserServiceMapper userServiceMapper;

	@BeforeAll
	static void setup()
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration()
				.setMatchingStrategy(MatchingStrategies.STRICT);

		userDelegateMapper = new UserDelegateMapper(mapper);
		userServiceMapper = new UserServiceMapper(mapper);

		userDelegateMapper.addMappings();
		userServiceMapper.addMappings();
	}

	//================================================================================================================================================
	// Resource <--> Model
	//================================================================================================================================================

	@Test
	public void testMappingUserToUserRO() {
		// Given
		User expectedUser = UserDataFactory.generateRandomUser();
		UserRO actualUser;

		// When
		actualUser = userDelegateMapper.mapUserToUserRO(expectedUser);

		// Then
		assertEquals(expectedUser.getUserId(), actualUser.getUserId());
		assertEquals(expectedUser.getDisplayName(), actualUser.getDisplayName());
		assertEquals(expectedUser.getAvailableCash(), expectedUser.getAvailableCash());
	}

	@Test
	public void testMappingUserROToUser() {
		// Given
		UserRO expectedUser = UserDataFactory.generateRandomUserRO();
		User actualUser;

		// When
		actualUser = userDelegateMapper.mapUserROToUser(expectedUser);

		// Then
		assertEquals(expectedUser.getUserId(), actualUser.getUserId());
		assertEquals(expectedUser.getDisplayName(), actualUser.getDisplayName());
		assertEquals(expectedUser.getAvailableCash(), expectedUser.getAvailableCash());
	}

	//================================================================================================================================================
	// Model <--> Repository
	//================================================================================================================================================

	@Test
	public void testMappingUserDOToUser() {
		// Given
		UserDO expectedUser = UserDataFactory.generateRandomUserDO();
		User actualUser;

		// When
		actualUser = userServiceMapper.mapUserDOToUser(expectedUser);

		// Then
		assertEquals(expectedUser.getUserId(), actualUser.getUserId());
		assertEquals(expectedUser.getDisplayName(), actualUser.getDisplayName());
		assertEquals(expectedUser.getAvailableCash(), expectedUser.getAvailableCash());
		//TEST
	}

	@Test
	public void testMappingUserToUserDO() {
		// Given
		User expectedUser = UserDataFactory.generateRandomUser();
		UserDO actualUser;

		// When
		actualUser = userServiceMapper.mapUserToUserDO(expectedUser);

		// Then
		assertEquals(expectedUser.getUserId(), actualUser.getUserId());
		assertEquals(expectedUser.getDisplayName(), actualUser.getDisplayName());
		assertEquals(expectedUser.getAvailableCash(), expectedUser.getAvailableCash());
	}
}
