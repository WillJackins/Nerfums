package com.nerfums.nerfumsservice.delegate;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.delegate.mappers.ContractDelegateMapper;
import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.resource.api.ContractRO;
import com.nerfums.nerfumsservice.service.ContractService;

@Component
public class ContractDelegate
{
	private final ContractDelegateMapper contractDelegateMapper;
	private final ContractService contractService;

	@Autowired
	public ContractDelegate(ContractDelegateMapper contractDelegateMapper, ContractService contractService)
	{
		super();
		this.contractDelegateMapper = contractDelegateMapper;
		this.contractService = contractService;
	}

	public ContractRO getContractById(Long contractId) {
		return contractDelegateMapper.mapContractToContractRO(contractService.getContractById(contractId));
	}

	public List<ContractRO> getAllActiveContracts(Long requestingUserId) {
		return contractService.getAllActiveContracts(requestingUserId).stream()
					   .map(contractDelegateMapper::mapContractToContractRO)
					   .collect(Collectors.toList());
	}

	public List<ContractRO> getAllContractsByOwnerId(Long ownerId, Boolean activeContracts) {
		return contractService.getAllContractsByOwnerId(ownerId, activeContracts).stream()
					   .map(contractDelegateMapper::mapContractToContractRO)
					   .collect(Collectors.toList());
	}

	public ContractRO createNewContract(ContractRO contractRO) {
		Contract preCreate = contractDelegateMapper.mapContractROToContract(contractRO);
		Contract postCreate = contractService.createNewContract(preCreate);

		return contractDelegateMapper.mapContractToContractRO(postCreate);
	}

	public ContractRO completeContract(ContractRO contractRO)
	{
		Contract preComplete = contractDelegateMapper.mapContractROToContract(contractRO);
		Contract postComplete = contractService.completeContract(preComplete);

		return contractDelegateMapper.mapContractToContractRO(postComplete);
	}

	public void deleteContract(Long contractId)
	{
		contractService.deleteContract(contractId);
	}
}
