package com.nerfums.nerfumsservice.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.nerfums.nerfumsservice.dataFactory.ContractDataFactory;
import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.repository.ContractRepository;
import com.nerfums.nerfumsservice.repository.api.ContractDO;
import com.nerfums.nerfumsservice.service.mappers.ContractServiceMapper;

import common.exception.BusinessServiceException;

public class ContractServiceTests {
	private static ContractRepository mockRepository;
	private static UserService mockUserService;
	private static ContractServiceMapper mockMapper;
	private static ContractService spyService;

	@BeforeAll
	static void beforeAll() {
		mockRepository = mock(ContractRepository.class);
		mockUserService = mock(UserService.class);
		mockMapper = mock(ContractServiceMapper.class);
		//spyService = spy(new ContractService(mockMapper, mockUserService, mockRepository));
	}

	@Test
	void getContractByIdTest()
	{
		Contract expectedContract = ContractDataFactory.generateRandomContract();

		when(mockRepository.findById(anyLong())).thenReturn(Optional.of(ContractDataFactory.generateRandomContractDO()));
		when(mockMapper.mapContractDOToContract(any(ContractDO.class))).thenReturn(expectedContract);

		// When
		Contract actualContract = spyService.getContractById(1l);

		// Then
		assertNotNull(actualContract);
	}

	@Test
	void getContractByIdTest_NotFoundFail()
	{
		when(mockRepository.findById(anyLong())).thenReturn(Optional.of(ContractDataFactory.generateRandomContractDO()));
		when(mockMapper.mapContractDOToContract(any(ContractDO.class))).thenReturn(null);

		assertThrows(BusinessServiceException.class, () -> spyService.getContractById(0l));
	}

	@Test
	void getAllContractsTest() {
//		// Given
//		Contract expectedContract = ContractDataFactory.generateRandomContract();
//
//		when(mockRepository.findAll()).thenReturn(Arrays.asList(ContractDataFactory.generateRandomContractDO()));
//		when(mockMapper.mapContractDOToContract(any(ContractDO.class))).thenReturn(expectedContract);
//
//		// When
//		List<Contract> actualContracts = spyService.getPostedContracts(1l);
//
//		// Then
//		assertNotNull(actualContracts);
	}

	@Test
	void createNewContractTest()
	{
		// Given
		Contract contract = ContractDataFactory.generateRandomContract();
		ContractDO contractDO = ContractDataFactory.generateRandomContractDO();

		when(mockRepository.save(any(ContractDO.class))).thenReturn(ContractDataFactory.generateRandomContractDO());
		when(mockMapper.mapContractToContractDO(any(Contract.class))).thenReturn(contractDO);
		when(mockMapper.mapContractDOToContract(any(ContractDO.class))).thenReturn(contract);

		// When
		Contract actualContract = spyService.createNewContract(contract);

		// Then
		assertNotNull(actualContract);
	}
}
