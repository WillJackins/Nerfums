package com.nerfums.nerfumsservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nerfums.nerfumsservice.repository.api.ModifierDO;

public interface ModifierRepository extends JpaRepository<ModifierDO, Long>
{

}
