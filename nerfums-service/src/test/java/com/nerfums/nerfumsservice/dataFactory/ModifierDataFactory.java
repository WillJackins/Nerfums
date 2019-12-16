package com.nerfums.nerfumsservice.dataFactory;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;
import static org.apache.commons.lang3.RandomStringUtils.randomNumeric;

import com.nerfums.nerfumsservice.model.Contract;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.repository.api.ContractDO;
import com.nerfums.nerfumsservice.repository.api.ModifierDO;
import com.nerfums.nerfumsservice.resource.api.ContractRO;
import com.nerfums.nerfumsservice.resource.api.ModifierRO;

public class ModifierDataFactory
{
	//================================================================================================================================================
	// Resource
	//================================================================================================================================================

	public static ModifierRO generateRandomModifierRO()
	{
		ModifierRO modifierRO = new ModifierRO();

		modifierRO.setModifierId(Long.parseLong(randomNumeric(3)));
		modifierRO.setModifierTitle(randomAlphabetic(10));
		modifierRO.setModifierDescription(randomAlphabetic(10));
		modifierRO.setModifierValue(Integer.parseInt(randomNumeric(3)));

		return modifierRO;
	}

	//================================================================================================================================================
	// Model
	//================================================================================================================================================

	public static Modifier generateRandomModifier()
	{
		Modifier modifier = new Modifier();

		modifier.setModifierId(Long.parseLong(randomNumeric(3)));
		modifier.setModifierTitle(randomAlphabetic(10));
		modifier.setModifierDescription(randomAlphabetic(10));
		modifier.setModifierValue(Integer.parseInt(randomNumeric(3)));

		return modifier;
	}

	//================================================================================================================================================
	// Database
	//================================================================================================================================================

	public static ModifierDO generateRandomModifierDO()
	{
		ModifierDO modifierDO = new ModifierDO();

		modifierDO.setModifierId(Long.parseLong(randomNumeric(3)));
		modifierDO.setModifierTitle(randomAlphabetic(10));
		modifierDO.setModifierDescription(randomAlphabetic(10));
		modifierDO.setModifierValue(Integer.parseInt(randomNumeric(3)));

		return modifierDO;
	}
}
