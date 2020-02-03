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
	public ResponseEntity<ContractRO> getContractById(@PathVariable Long contractId) {
		ContractRO contractRO = contractDelegate.getContractById(contractId);
		return ResponseEntity.ok(contractRO);
	}

	@GetMapping("/posted")
	public ResponseEntity<List<ContractRO>> getPostedContracts(@RequestHeader("Authorization") String token) {
		token = token.substring(7);
		List<ContractRO> contracts = contractDelegate.getPostedContracts(token);
		return ResponseEntity.ok(contracts);
	}

	@GetMapping("/owner")
	public ResponseEntity<List<ContractRO>> getOwnerContracts(@RequestHeader("Authorization") String token, @RequestParam("active") Boolean active) {
		token = token.substring(7);
		List<ContractRO> contracts = contractDelegate.getOwnerContracts(token, active);
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
		ContractRO completedContract = contractDelegate.completeContract(contractRO);
		return ResponseEntity.ok(completedContract);
	}

	@DeleteMapping("/{contractId}")
	public void deleteContract(@PathVariable Long contractId) {
		contractDelegate.deleteContract(contractId);
	}
}
