package com.nerfums.nerfumsservice.resource;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.nerfums.nerfumsservice.dataFactory.ContractDataFactory;
import com.nerfums.nerfumsservice.dataFactory.ModifierDataFactory;
import com.nerfums.nerfumsservice.delegate.ContractDelegate;
import com.nerfums.nerfumsservice.delegate.ModifierDelegate;
import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.resource.api.ContractRO;
import com.nerfums.nerfumsservice.resource.api.ModifierRO;

import common.exception.BusinessServiceException;

@WebMvcTest(ModifierController.class)
public class ModifierControllerTests
{
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private ModifierDelegate mockDelegate;


	@Test
	void getModifierByIdTest() throws Exception
	{
		// Given
		ModifierRO modifierRO = ModifierDataFactory.generateRandomModifierRO();
		when(mockDelegate.getModifierById(anyLong())).thenReturn(modifierRO);

		RequestBuilder request = MockMvcRequestBuilders.get("/Nerfums/api/modifiers/1");

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.modifierId").value(modifierRO.getModifierId()));
	}

	@Test
	void getModifierByIdTest_NotFoundFail() throws Exception
	{
		// Given
		when(mockDelegate.getModifierById(anyLong())).thenThrow(new BusinessServiceException("Modifier not found.", NerfumsErrorCode.NO_MODIFIER));

		RequestBuilder request = MockMvcRequestBuilders.get("/Nerfums/api/modifiers/0").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print()).andExpect(status().isNotFound());
	}

	@Test
	void getAllModifiersTest() throws Exception
	{
		// Given
		ModifierRO modifierRO = ModifierDataFactory.generateRandomModifierRO();
		when(mockDelegate.getAllModifiers()).thenReturn(Arrays.asList(modifierRO));

		RequestBuilder request = MockMvcRequestBuilders.get("/Nerfums/api/modifiers").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk());
	}

	@Test
	void postModifierTest() throws Exception
	{
		// Given
		ModifierRO modifierRO = ModifierDataFactory.generateRandomModifierRO();
		when(mockDelegate.createNewModifier(any(ModifierRO.class))).thenReturn(modifierRO);

		RequestBuilder request = MockMvcRequestBuilders.post("/Nerfums/api/modifiers").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.modifierId").value(modifierRO.getModifierId()));
	}
}
