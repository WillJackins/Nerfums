package com.nerfums.nerfumsservice.repository;

import org.springframework.data.repository.CrudRepository;

import com.nerfums.nerfumsservice.repository.api.ContractDO;

public interface ContractRepository extends CrudRepository<ContractDO, Long>
{

}
