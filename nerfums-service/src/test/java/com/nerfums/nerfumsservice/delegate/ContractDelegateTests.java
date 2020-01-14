package com.nerfums.nerfumsservice.delegate;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.nerfums.nerfumsservice.dataFactory.ContractDataFactory;
import com.nerfums.nerfumsservice.delegate.mappers.ContractDelegateMapper;
import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.resource.api.ContractRO;
import com.nerfums.nerfumsservice.service.ContractService;

public class ContractDelegateTests
{
	private static ContractService mockService;
	private static ContractDelegateMapper mockMapper;
	private static ContractDelegate spyDelegate;

	@BeforeAll
	static void beforeTests()
	{
		mockService = mock(ContractService.class);
		mockMapper = mock(ContractDelegateMapper.class);
		spyDelegate = spy(new ContractDelegate(mockMapper, mockService));
	}

	@Test
	void getContractByIdTest()
	{
		// Given
		ContractRO expectedContract = ContractDataFactory.generateRandomContractRO();

		when(mockService.getContractById(anyLong())).thenReturn(ContractDataFactory.generateRandomContract());
		when(mockMapper.mapContractToContractRO(any(Contract.class))).thenReturn(expectedContract);

		// When
		ContractRO actualContract = spyDelegate.getContractById(1l);

		// Then
		assertNotNull(actualContract);
	}

	@Test
	void getAllContractsTest()
	{
		// Given
		ContractRO expectedContract = ContractDataFactory.generateRandomContractRO();

		when(mockService.getAllActiveContracts(anyLong())).thenReturn(Arrays.asList(ContractDataFactory.generateRandomContract()));
		when(mockMapper.mapContractToContractRO(any(Contract.class))).thenReturn(expectedContract);

		// When
		List<ContractRO> actualContracts = spyDelegate.getAllActiveContracts(1l);

		// Then
		assertNotNull(actualContracts);
	}

	@Test
	void createNewContractTest()
	{
		// Given
		ContractRO expectedContract = ContractDataFactory.generateRandomContractRO();

		when(mockService.createNewContract(any(Contract.class))).thenReturn(ContractDataFactory.generateRandomContract());
		when(mockMapper.mapContractROToContract(any(ContractRO.class))).thenReturn(ContractDataFactory.generateRandomContract());
		when(mockMapper.mapContractToContractRO(any(Contract.class))).thenReturn(expectedContract);

		// When
		ContractRO actualContract = spyDelegate.createNewContract(expectedContract);

		// Then
		assertNotNull(actualContract);
	}
}
