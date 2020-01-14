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
	public ResponseEntity<List<ContractRO>> getAllActiveContracts(
			@RequestParam(name = "requestingUserId") Long requestingUserId
	) {
		List<ContractRO> contracts = contractDelegate.getAllActiveContracts(requestingUserId);
		return ResponseEntity.ok(contracts);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ContractRO> createNewContract(@RequestBody ContractRO contractRO) {
		ContractRO createdContract = contractDelegate.createNewContract(contractRO);
		return ResponseEntity.ok(createdContract);
	}

	@PatchMapping()
	public ResponseEntity<ContractRO> completeContract(@RequestBody ContractRO contractRO) {
		System.out.println("PATCH");
		ContractRO completedContract = contractDelegate.completeContract(contractRO);
		return ResponseEntity.ok(completedContract);
	}

	@DeleteMapping("/{contractId}")
	public void deleteContract(@PathVariable Long contractId) {
		System.out.println("DELETE");
		contractDelegate.deleteContract(contractId);
	}
}
