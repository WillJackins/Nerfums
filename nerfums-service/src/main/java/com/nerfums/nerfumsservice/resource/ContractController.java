package com.nerfums.nerfumsservice.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
