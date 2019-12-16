package com.nerfums.nerfumsservice.service.mappers;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.repository.api.ContractDO;
import com.nerfums.nerfumsservice.repository.api.ModifierDO;

@Component
public class ModifierServiceMapper
{
	private final ModelMapper modelMapper;

	@Autowired
	public ModifierServiceMapper(ModelMapper modelMapper)
	{
		super();
		this.modelMapper = modelMapper;
	}

	@PostConstruct
	public void addMappings()
	{
		//Modifier -> ModifierDO
		addMappingModifierToModifierDO(modelMapper);

		//ModifierDO -> Modifier
		addMappingModifierDOToModifier(modelMapper);
	}


	public ModifierDO mapModifierToModifierDO(Modifier modifier)
	{
		return modelMapper.map(modifier, ModifierDO.class);
	}

	public Modifier mapModifierDOToModifier(ModifierDO modifierDO)
	{
		return modelMapper.map(modifierDO, Modifier.class);
	}


	private void addMappingModifierToModifierDO(ModelMapper modelMapper)
	{
		modelMapper.typeMap(Modifier.class, ModifierDO.class);
	}

	private void addMappingModifierDOToModifier(ModelMapper modelMapper)
	{
		modelMapper.typeMap(ModifierDO.class, Modifier.class);
	}
}
