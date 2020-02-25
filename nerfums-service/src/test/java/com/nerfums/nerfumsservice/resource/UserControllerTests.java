package com.nerfums.nerfumsservice.resource;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;
import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nerfums.nerfumsservice.dataFactory.UserDataFactory;
import com.nerfums.nerfumsservice.delegate.UserDelegate;
import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.resource.api.UserRO;

import common.exception.BusinessServiceException;

@WebMvcTest(UserController.class)
public class UserControllerTests
{
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserDelegate mockDelegate;


	@Test
	void getUserByIdTest() throws Exception
	{
		// Given
		UserRO userRO = UserDataFactory.generateRandomUserRO();
		when(mockDelegate.getUserById(anyLong())).thenReturn(userRO);

		RequestBuilder request = MockMvcRequestBuilders.get("/users/1").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.userId").value(userRO.getUserId()));
	}

	@Test
	void getUserByIdTest_NotFoundFail() throws Exception
	{
		// Given
		when(mockDelegate.getUserById(anyLong())).thenThrow(new BusinessServiceException("User not found.", NerfumsErrorCode.NO_USER));

		RequestBuilder request = MockMvcRequestBuilders.get("/users/0").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print()).andExpect(status().isNotFound());
	}

	@Test
	void getAllUsersTest() throws Exception
	{
		// Given
		UserRO userRO = UserDataFactory.generateRandomUserRO();
		when(mockDelegate.getAllUsers()).thenReturn(Arrays.asList(userRO));

		RequestBuilder request = MockMvcRequestBuilders.get("/users").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk());
	}

	@Test
	void postUserTest() throws Exception {
		// Given
		UserRO userRO = UserDataFactory.generateRandomUserRO();
		//when(mockDelegate.registerUser(any(UserRO.class))).thenReturn(userRO);

		RequestBuilder request = MockMvcRequestBuilders.post("/users")
										 .contentType(MediaType.APPLICATION_JSON)
										 .content(convertObjectToJsonBytes(userRO));

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.userId").value(userRO.getUserId()));
	}

	public static byte[] convertObjectToJsonBytes(Object object) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
		return mapper.writeValueAsBytes(object);
	}
}
