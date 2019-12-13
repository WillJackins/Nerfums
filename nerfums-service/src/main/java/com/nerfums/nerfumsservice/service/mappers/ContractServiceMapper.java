package com.nerfums.nerfumsservice.service.mappers;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.repository.api.ContractDO;

@Component
public class ContractServiceMapper
{
	private final ModelMapper modelMapper;

	@Autowired
	public ContractServiceMapper(ModelMapper modelMapper)
	{
		super();
		this.modelMapper = modelMapper;
	}

	@PostConstruct
	public void addMappings()
	{
		//ContractDO -> Contract
		addMappingContractDOToContract(modelMapper);

		//Contract -> ContractDO
		addMappingContractToContractDO(modelMapper);
	}


	public Contract mapContractDOToContract(ContractDO contractDO)
	{
		return modelMapper.map(contractDO, Contract.class);
	}

	public ContractDO mapContractToContractDO(Contract contract)
	{
		return modelMapper.map(contract, ContractDO.class);
	}


	private void addMappingContractDOToContract(ModelMapper modelMapper)
	{
		modelMapper.typeMap(ContractDO.class, Contract.class);
	}

	private void addMappingContractToContractDO(ModelMapper modelMapper)
	{
		modelMapper.typeMap(Contract.class, ContractDO.class);
	}
}
