package com.nerfums.nerfumsservice.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nerfums.nerfumsservice.delegate.ContractDelegate;
import com.nerfums.nerfumsservice.resource.api.ContractRO;

@RestController
@RequestMapping("Nerfums/api")
public class ContractController
{
	private final ContractDelegate contractDelegate;

	@Autowired
	public ContractController(ContractDelegate contractDelegate)
	{
		super();
		this.contractDelegate = contractDelegate;
	}

	@GetMapping("/contracts")
	public ResponseEntity<List<ContractRO>> getAllContracts()
	{
		List<ContractRO> contracts = contractDelegate.getAllContracts();
		return ResponseEntity.ok(contracts);
	}

	@PostMapping("/contracts")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ContractRO> createNewContract(@RequestBody ContractRO contractRO)
	{
		ContractRO createdContract = contractDelegate.createNewContract(contractRO);

		return ResponseEntity.ok(createdContract);
	}
}
