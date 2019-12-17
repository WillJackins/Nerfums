package com.nerfums.nerfumsservice.mappers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import com.nerfums.nerfumsservice.dataFactory.ContractDataFactory;
import com.nerfums.nerfumsservice.delegate.mappers.ContractDelegateMapper;
import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.repository.api.ContractDO;
import com.nerfums.nerfumsservice.resource.api.ContractRO;
import com.nerfums.nerfumsservice.service.mappers.ContractServiceMapper;

public class ContractMappersTests
{
	private static ContractDelegateMapper contractDelegateMapper;
	private static ContractServiceMapper contractServiceMapper;

	@BeforeAll
	static void setup()
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration()
				.setMatchingStrategy(MatchingStrategies.STRICT);

		contractDelegateMapper = new ContractDelegateMapper(mapper);
		contractServiceMapper = new ContractServiceMapper(mapper);

		contractDelegateMapper.addMappings();
		contractServiceMapper.addMappings();
	}

	//================================================================================================================================================
	// Resource <--> Model
	//================================================================================================================================================

	@Test
	public void testMappingContractToContractRO()
	{
		// Given
		Contract expectedContract = ContractDataFactory.generateRandomContract();
		ContractRO actualContract;

		// When
		actualContract = contractDelegateMapper.mapContractToContractRO(expectedContract);

		// Then
		assertEquals(expectedContract.getContractId(), actualContract.getContractId());
		assertEquals(expectedContract.getPaymentAmount(), actualContract.getPaymentAmount());

		assertNotNull(actualContract.getRequirements());
		assertNotNull(actualContract.getOptionals());
	}

	@Test
	public void testMappingContractROToContract()
	{
		// Given
		ContractRO expectedContract = ContractDataFactory.generateRandomContractRO();
		Contract actualContract;

		// When
		actualContract = contractDelegateMapper.mapContractROToContract(expectedContract);

		// Then
		assertEquals(expectedContract.getContractId(), actualContract.getContractId());
		assertEquals(expectedContract.getPaymentAmount(), actualContract.getPaymentAmount());

		assertNotNull(actualContract.getContractOwner());
		assertNotNull(actualContract.getContractTarget());

		assertNotNull(actualContract.getRequirements());
		assertNotNull(actualContract.getOptionals());
	}

	//================================================================================================================================================
	// Model <--> Repository
	//================================================================================================================================================

	@Test
	public void testMappingContractDOToContract()
	{
		// Given
		ContractDO expectedContract = ContractDataFactory.generateRandomContractDO();
		Contract actualContract;

		// When
		actualContract = contractServiceMapper.mapContractDOToContract(expectedContract);

		// Then
		assertEquals(expectedContract.getContractId(), actualContract.getContractId());
		assertEquals(expectedContract.getPaymentAmount(), actualContract.getPaymentAmount());

		assertNotNull(actualContract.getContractOwner());
		assertNotNull(actualContract.getContractTarget());

		assertNotNull(actualContract.getRequirements());
		assertNotNull(actualContract.getOptionals());
	}

	@Test
	public void testMappingContractToContractDO()
	{
		// Given
		Contract expectedContract = ContractDataFactory.generateRandomContract();
		ContractDO actualContract;

		// When
		actualContract = contractServiceMapper.mapContractToContractDO(expectedContract);

		// Then
		assertEquals(expectedContract.getContractId(), actualContract.getContractId());
		assertEquals(expectedContract.getPaymentAmount(), actualContract.getPaymentAmount());

		assertNotNull(actualContract.getContractOwner());
		assertNotNull(actualContract.getContractTarget());

		assertNotNull(actualContract.getRequirements());
		assertNotNull(actualContract.getOptionals());
	}
}
