package com.nerfums.nerfumsservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.ContractRepository;
import com.nerfums.nerfumsservice.repository.api.ContractDO;
import com.nerfums.nerfumsservice.service.mappers.ContractServiceMapper;

import common.exception.BusinessServiceException;

@Service
public class ContractService {
	private final ContractServiceMapper contractServiceMapper;
	private final UserService userService;
	private final ContractRepository contractRepository;

	@Autowired
	public ContractService(ContractServiceMapper contractServiceMapper, UserService userService, ContractRepository contractRepository) {
		super();
		this.contractServiceMapper = contractServiceMapper;
		this.userService = userService;
		this.contractRepository = contractRepository;
	}

	public Contract getContractById(Long contractId) {
		return contractRepository.findById(contractId)
					   .map(contractServiceMapper::mapContractDOToContract)
					   .orElseThrow(() -> new BusinessServiceException("Contract not found.", NerfumsErrorCode.NO_CONTRACT));
	}

	public List<Contract> getAllActiveContracts(Long requestingUserId) {
		return contractRepository.getAllActiveContracts(requestingUserId).stream()
					   .map(contractServiceMapper::mapContractDOToContract)
					   .collect(Collectors.toList());
	}

	public List<Contract> getAllContractsByOwnerId(Long ownerId, Boolean activeContracts) {
		return contractRepository.getAllContractsByOwnerId(ownerId, activeContracts).stream()
					   .map(contractServiceMapper::mapContractDOToContract)
					   .collect(Collectors.toList());
	}

	public Contract createNewContract(Contract contractToCreate) {
		User contractOwner = contractToCreate.getContractOwner();

		Integer contractAmount = contractToCreate.getContractReward();

		if (contractOwner.getAvailableCash() - contractAmount < 0) {
			throw new BusinessServiceException("Insufficient Funds", NerfumsErrorCode.INSUFFICIENT_FUNDS);
		}

		contractOwner.setCommittedCash(contractOwner.getCommittedCash() + contractAmount);
		contractOwner.setAvailableCash(contractOwner.getAvailableCash() - contractAmount);
		User updatedUser = userService.updateUser(contractOwner);


		ContractDO preCreate = contractServiceMapper.mapContractToContractDO(contractToCreate);
		preCreate.setContractActive(true);

		ContractDO postCreate = contractRepository.save(preCreate);
		return contractServiceMapper.mapContractDOToContract(postCreate);
	}

	public Contract completeContract(Contract contractToComplete) {
		User contractPoster = contractToComplete.getContractOwner();
		User contractCompleter = contractToComplete.getContractCompletedBy();

		Integer contractAmount = contractToComplete.getContractReward();
		contractPoster.setCommittedCash(contractPoster.getCommittedCash() - contractAmount);

		for (Modifier optional : contractToComplete.getOptionals()) {
			contractAmount += optional.getModifierValue();
		}
		contractCompleter.setAvailableCash(contractCompleter.getAvailableCash() + contractAmount);

		User updatedPoster = userService.updateUser(contractPoster);
		User updatedCompleter = userService.updateUser(contractCompleter);


		ContractDO preComplete = contractServiceMapper.mapContractToContractDO(contractToComplete);
		preComplete.setContractActive(false);

		ContractDO postComplete = contractRepository.save(preComplete);
		return contractServiceMapper.mapContractDOToContract(postComplete);
	}

	public void deleteContract(Long contractId) {
		Contract contract = getContractById(contractId);
		User contractOwner = contract.getContractOwner();

		Integer contractAmount = contract.getContractReward();
		contractOwner.setCommittedCash(contractOwner.getCommittedCash() - contractAmount);
		contractOwner.setAvailableCash(contractOwner.getAvailableCash() + contractAmount);
		User updatedUser = userService.updateUser(contractOwner);


		contractRepository.deleteById(contractId);
	}
}
