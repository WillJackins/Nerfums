package com.nerfums.nerfumsservice.resource;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

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
import com.nerfums.nerfumsservice.dataFactory.ContractDataFactory;
import com.nerfums.nerfumsservice.delegate.ContractDelegate;
import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.resource.api.ContractRO;

import common.exception.BusinessServiceException;

@WebMvcTest(ContractController.class)
public class ContractControllerTests
{
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private ContractDelegate mockDelegate;


	@Test
	void getContractByIdTest() throws Exception
	{
		// Given
		ContractRO contractRO = ContractDataFactory.generateRandomContractRO();
		when(mockDelegate.getContractById(anyLong())).thenReturn(contractRO);

		RequestBuilder request = MockMvcRequestBuilders.get("/contracts/1").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.contractId").value(contractRO.getContractId()));
	}

	@Test
	void getContractByIdTest_NotFoundFail() throws Exception
	{
		// Given
		when(mockDelegate.getContractById(anyLong())).thenThrow(new BusinessServiceException("Contract not found.", NerfumsErrorCode.NO_CONTRACT));

		RequestBuilder request = MockMvcRequestBuilders.get("/contracts/0").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print()).andExpect(status().isNotFound());
	}

	@Test
	void getAllContractsTest() throws Exception
	{
		// Given
		ContractRO contractRO = ContractDataFactory.generateRandomContractRO();
		when(mockDelegate.getAllContracts()).thenReturn(Arrays.asList(contractRO));

		RequestBuilder request = MockMvcRequestBuilders.get("/contracts").contentType(MediaType.APPLICATION_JSON);

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk());
	}

	@Test
	void postContractTest() throws Exception
	{
		// Given
		ContractRO contractRO = ContractDataFactory.generateRandomContractRO();
		when(mockDelegate.createNewContract(any(ContractRO.class))).thenReturn(contractRO);

		RequestBuilder request = MockMvcRequestBuilders.post("/contracts")
				.contentType(MediaType.APPLICATION_JSON)
				.content(convertObjectToJsonBytes(contractRO));

		// When
		ResultActions result = mockMvc.perform(request);

		// Then
		result.andDo(print())
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.contractId").value(contractRO.getContractId()));
	}

	public static byte[] convertObjectToJsonBytes(Object object) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
		return mapper.writeValueAsBytes(object);
	}
}
