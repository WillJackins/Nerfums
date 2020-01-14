package com.nerfums.nerfumsservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.nerfums.nerfumsservice.repository.api.ContractDO;

public interface ContractRepository extends CrudRepository<ContractDO, Long> {
	@Query(value =
				   "select contract " +
						   "from ContractDO contract " +
						   "where contract.contractTarget.userId <> :requestingUserId " +
						   "and contract.contractActive = true"
	)
	List<ContractDO> getAllActiveContracts(Long requestingUserId);

	@Query(value =
				   "select contract " +
						   "from ContractDO contract " +
						   "where contract.contractOwner.userId = :ownerId " +
						   "and contract.contractActive = :activeContracts"
	)
	List<ContractDO> getAllContractsByOwnerId(Long ownerId, Boolean activeContracts);
}
