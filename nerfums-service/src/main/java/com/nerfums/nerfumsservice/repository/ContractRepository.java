package com.nerfums.nerfumsservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.nerfums.nerfumsservice.repository.api.ContractDO;

public interface ContractRepository extends CrudRepository<ContractDO, Long>
{
	@Query(value = "select contract from ContractDO contract where contract.contractOwner.userId = :ownerId")
	List<ContractDO>  getAllContractsByOwnerId(Long ownerId);
}
