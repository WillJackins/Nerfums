package com.nerfums.nerfumsservice.dataFactory;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;
import static org.apache.commons.lang3.RandomStringUtils.randomNumeric;

import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.repository.api.ContractDO;
import com.nerfums.nerfumsservice.resource.api.ContractRO;

public class ContractDataFactory
{

	//================================================================================================================================================
	// Resource
	//================================================================================================================================================

	public static ContractRO generateRandomContractRO()
	{
		ContractRO contract = new ContractRO();

		contract.setContractId(Long.parseLong(randomNumeric(3)));
		contract.setContractOwner(randomAlphabetic(10));
		contract.setTargetName(randomAlphabetic(10));
		contract.setPaymentAmount(Integer.parseInt(randomNumeric(5)));

		return contract;
	}

	//================================================================================================================================================
	// Model
	//================================================================================================================================================

	public static Contract generateRandomContract()
	{
		Contract contract = new Contract();

		contract.setContractId(Long.parseLong(randomNumeric(3)));
		contract.setContractOwner(randomAlphabetic(10));
		contract.setTargetName(randomAlphabetic(10));
		contract.setPaymentAmount(Integer.parseInt(randomNumeric(5)));

		return contract;
	}

	//================================================================================================================================================
	// Database
	//================================================================================================================================================

	public static ContractDO generateRandomContractDO()
	{
		ContractDO contract = new ContractDO();

		contract.setContractId(Long.parseLong(randomNumeric(3)));
		contract.setContractOwner(randomAlphabetic(10));
		contract.setTargetName(randomAlphabetic(10));
		contract.setPaymentAmount(Integer.parseInt(randomNumeric(5)));

		return contract;
	}
}
