package com.nerfums.nerfumsservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.repository.ContractRepository;
import com.nerfums.nerfumsservice.repository.api.ContractDO;
import com.nerfums.nerfumsservice.service.mappers.ContractServiceMapper;

@Service
public class ContractService
{
	private final ContractServiceMapper contractServiceMapper;
	private final ContractRepository contractRepository;

	@Autowired
	public ContractService(ContractServiceMapper contractServiceMapper, ContractRepository contractRepository)
	{
		super();
		this.contractServiceMapper = contractServiceMapper;
		this.contractRepository = contractRepository;
	}

	public List<Contract> getAllContracts()
	{
		return ((List<ContractDO>)contractRepository.findAll()).stream()
				.map(contractServiceMapper::mapContractDOToContract)
				.collect(Collectors.toList());
	}

	public Contract createNewContract(Contract contract)
	{
		ContractDO preCreate = contractServiceMapper.mapContractToContractDO(contract);
		ContractDO postCreate = contractRepository.save(preCreate);

		return contractServiceMapper.mapContractDOToContract(postCreate);
	}
}
