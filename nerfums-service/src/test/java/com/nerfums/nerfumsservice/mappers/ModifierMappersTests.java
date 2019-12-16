package com.nerfums.nerfumsservice.mappers;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import com.nerfums.nerfumsservice.dataFactory.ModifierDataFactory;
import com.nerfums.nerfumsservice.delegate.mappers.ModifierDelegateMapper;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.repository.api.ModifierDO;
import com.nerfums.nerfumsservice.resource.api.ModifierRO;
import com.nerfums.nerfumsservice.service.mappers.ModifierServiceMapper;

public class ModifierMappersTests
{
	private static ModifierDelegateMapper modifierDelegateMapper;
	private static ModifierServiceMapper modifierServiceMapper;

	@BeforeAll
	static void beforeAll()
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration()
				.setMatchingStrategy(MatchingStrategies.STRICT);

		modifierDelegateMapper = new ModifierDelegateMapper(mapper);
		modifierServiceMapper = new ModifierServiceMapper(mapper);

		modifierDelegateMapper.addMappings();
		modifierServiceMapper.addMappings();
	}

	//================================================================================================================================================
	// Resource <--> Model
	//================================================================================================================================================

	@Test
	public void testMappingModifierToModifierRO()
	{
		// Given
		Modifier expectedModifier = ModifierDataFactory.generateRandomModifier();
		ModifierRO actualModifier;

		// When
		actualModifier = modifierDelegateMapper.mapModifierToModifierRO(expectedModifier);

		// Then
		assertEquals(expectedModifier.getModifierId(), actualModifier.getModifierId());
		assertEquals(expectedModifier.getModifierTitle(), actualModifier.getModifierTitle());
		assertEquals(expectedModifier.getModifierDescription(), actualModifier.getModifierDescription());
		assertEquals(expectedModifier.getModifierValue(), actualModifier.getModifierValue());
	}

	@Test
	public void testMappingModifierROToModifier()
	{
		// Given
		ModifierRO expectedModifier = ModifierDataFactory.generateRandomModifierRO();
		Modifier actualModifier;

		// When
		actualModifier = modifierDelegateMapper.mapModifierROToModifier(expectedModifier);

		// Then
		assertEquals(expectedModifier.getModifierId(), actualModifier.getModifierId());
		assertEquals(expectedModifier.getModifierTitle(), actualModifier.getModifierTitle());
		assertEquals(expectedModifier.getModifierDescription(), actualModifier.getModifierDescription());
		assertEquals(expectedModifier.getModifierValue(), actualModifier.getModifierValue());
	}

	//================================================================================================================================================
	// Model <--> Repository
	//================================================================================================================================================

	@Test
	public void testMappingModifierToModifierDO()
	{
		// Given
		Modifier expectedModifier = ModifierDataFactory.generateRandomModifier();
		ModifierDO actualModifier;

		// When
		actualModifier = modifierServiceMapper.mapModifierToModifierDO(expectedModifier);

		// Then
		assertEquals(expectedModifier.getModifierId(), actualModifier.getModifierId());
		assertEquals(expectedModifier.getModifierTitle(), actualModifier.getModifierTitle());
		assertEquals(expectedModifier.getModifierDescription(), actualModifier.getModifierDescription());
		assertEquals(expectedModifier.getModifierValue(), actualModifier.getModifierValue());
	}

	@Test
	public void testMappingModifierDOToModifier()
	{
		// Given
		ModifierDO expectedModifier = ModifierDataFactory.generateRandomModifierDO();
		Modifier actualModifier;

		// When
		actualModifier = modifierServiceMapper.mapModifierDOToModifier(expectedModifier);

		// Then
		assertEquals(expectedModifier.getModifierId(), actualModifier.getModifierId());
		assertEquals(expectedModifier.getModifierTitle(), actualModifier.getModifierTitle());
		assertEquals(expectedModifier.getModifierDescription(), actualModifier.getModifierDescription());
		assertEquals(expectedModifier.getModifierValue(), actualModifier.getModifierValue());
	}
}
