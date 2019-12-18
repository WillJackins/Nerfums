package com.nerfums.nerfumsservice.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nerfums.nerfumsservice.delegate.ContractDelegate;
import com.nerfums.nerfumsservice.resource.api.ContractRO;

@RestController
@RequestMapping("/contracts")
public class ContractController
{
	private final ContractDelegate contractDelegate;

	@Autowired
	public ContractController(ContractDelegate contractDelegate)
	{
		super();
		this.contractDelegate = contractDelegate;
	}

	@GetMapping("/{contractId}")
	public ResponseEntity<ContractRO> getContractById(@PathVariable Long contractId)
	{
		ContractRO contractRO = contractDelegate.getContractById(contractId);
		return ResponseEntity.ok(contractRO);
	}

	@GetMapping
	public ResponseEntity<List<ContractRO>> getAllContracts()
	{
		List<ContractRO> contracts = contractDelegate.getAllContracts();
		return ResponseEntity.ok(contracts);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ContractRO> createNewContract(@RequestBody ContractRO contractRO)
	{
		ContractRO createdContract = contractDelegate.createNewContract(contractRO);
		System.out.println("POST");
		System.out.println(createdContract.getContractReward());
		return ResponseEntity.ok(createdContract);
	}
}
