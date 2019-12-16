package com.nerfums.nerfumsservice.delegate.mappers;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.resource.api.ContractRO;
import com.nerfums.nerfumsservice.resource.api.ModifierRO;

@Component
public class ModifierDelegateMapper
{
	private final ModelMapper modelMapper;

	@Autowired
	public ModifierDelegateMapper(ModelMapper modelMapper)
	{
		super();
		this.modelMapper = modelMapper;
	}

	@PostConstruct
	public void addMappings()
	{
		//Modifier -> ModifierRO
		addMappingModifierToModifierRO(modelMapper);

		//ModifierRO -> Modifier
		addMappingModifierROToModifier(modelMapper);
	}


	public ModifierRO mapModifierToModifierRO(Modifier modifier)
	{
		return modelMapper.map(modifier, ModifierRO.class);
	}

	public Modifier mapModifierROToModifier(ModifierRO modifierRO)
	{
		return modelMapper.map(modifierRO, Modifier.class);
	}


	private void addMappingModifierToModifierRO(ModelMapper modelMapper)
	{
		modelMapper.typeMap(Modifier.class, ModifierRO.class);
	}

	private void addMappingModifierROToModifier(ModelMapper modelMapper)
	{
		modelMapper.typeMap(ModifierRO.class, Modifier.class);
	}
}
