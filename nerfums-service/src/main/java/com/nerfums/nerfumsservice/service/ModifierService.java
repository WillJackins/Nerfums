package com.nerfums.nerfumsservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.repository.ModifierRepository;
import com.nerfums.nerfumsservice.repository.api.ModifierDO;
import com.nerfums.nerfumsservice.service.mappers.ModifierServiceMapper;
import com.sun.org.apache.xpath.internal.operations.Mod;

import common.exception.BusinessServiceException;

@Service
public class ModifierService
{
	private final ModifierServiceMapper modifierServiceMapper;
	private final ModifierRepository modifierRepository;

	@Autowired
	public ModifierService(ModifierServiceMapper modifierServiceMapper, ModifierRepository modifierRepository)
	{
		this.modifierServiceMapper = modifierServiceMapper;
		this.modifierRepository = modifierRepository;
	}

	public Modifier getModifierById(Long modifierId)
	{
		return modifierRepository.findById(modifierId)
				.map(modifierServiceMapper::mapModifierDOToModifier)
				.orElseThrow(() -> new BusinessServiceException("Modifier not found", NerfumsErrorCode.NO_MODIFIER));
	}

	public List<Modifier> getAllModifiers()
	{
		return modifierRepository.findAll().stream()
				.map(modifierServiceMapper::mapModifierDOToModifier)
				.collect(Collectors.toList());
	}

	public Modifier createNewModifier(Modifier modifier)
	{
		ModifierDO preCreate = modifierServiceMapper.mapModifierToModifierDO(modifier);
		ModifierDO postCreate = modifierRepository.save(preCreate);

		return modifierServiceMapper.mapModifierDOToModifier(postCreate);
	}
}
