package com.nerfums.nerfumsservice.delegate;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.delegate.mappers.ModifierDelegateMapper;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.resource.api.ModifierRO;
import com.nerfums.nerfumsservice.service.ModifierService;

@Component
public class ModifierDelegate
{
	private final ModifierDelegateMapper modifierDelegateMapper;
	private final ModifierService modifierService;

	@Autowired
	public ModifierDelegate(ModifierDelegateMapper modifierDelegateMapper, ModifierService modifierService)
	{
		this.modifierDelegateMapper = modifierDelegateMapper;
		this.modifierService = modifierService;
	}


	public ModifierRO getModifierById(Long modifierId)
	{
		return modifierDelegateMapper.mapModifierToModifierRO(modifierService.getModifierById(modifierId));
	}

	public List<ModifierRO> getAllModifiers()
	{
		return modifierService.getAllModifiers().stream()
				.map(modifierDelegateMapper::mapModifierToModifierRO)
				.collect(Collectors.toList());
	}

	public ModifierRO createNewModifier(ModifierRO modifierRO)
	{
		Modifier preCreate = modifierDelegateMapper.mapModifierROToModifier(modifierRO);
		Modifier postCreate = modifierService.createNewModifier(preCreate);

		return modifierDelegateMapper.mapModifierToModifierRO(postCreate);
	}
}
