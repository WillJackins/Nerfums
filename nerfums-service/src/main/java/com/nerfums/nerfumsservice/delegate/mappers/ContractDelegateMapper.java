package com.nerfums.nerfumsservice.delegate.mappers;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.repository.api.ContractDO;
import com.nerfums.nerfumsservice.resource.api.ContractRO;

@Component
public class ContractDelegateMapper
{
	private final ModelMapper modelMapper;

	@Autowired
	public ContractDelegateMapper(ModelMapper modelMapper)
	{
		super();
		this.modelMapper = modelMapper;
	}

	@PostConstruct
	public void addMappings()
	{
		//Contract -> ContractRO
		addMappingContractToContractRO(modelMapper);
	}


	public ContractRO mapContractToContractRO(Contract contract)
	{
		return modelMapper.map(contract, ContractRO.class);
	}


	private void addMappingContractToContractRO(ModelMapper modelMapper)
	{
		modelMapper.typeMap(Contract.class, ContractRO.class);
	}
}
