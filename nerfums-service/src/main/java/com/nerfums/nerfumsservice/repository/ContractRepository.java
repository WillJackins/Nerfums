package com.nerfums.nerfumsservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.nerfums.nerfumsservice.repository.api.ContractDO;

public interface ContractRepository extends CrudRepository<ContractDO, Long> {
	@Query(value =
				   "select contract " +
						   "from ContractDO contract " +
						   "where contract.contractTarget.username <> :requesterUsername " +
						   "and contract.contractActive = true"
	)
	List<ContractDO> getPostedContracts(String requesterUsername);

	@Query(value =
				   "select contract " +
						   "from ContractDO contract " +
						   "where contract.contractOwner.username = :ownerUsername " +
						   "and contract.contractActive = :active"
	)
	List<ContractDO> getOwnerContracts(String ownerUsername, Boolean active);
}
