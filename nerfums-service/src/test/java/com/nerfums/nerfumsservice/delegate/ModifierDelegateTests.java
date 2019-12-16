package com.nerfums.nerfumsservice.delegate;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.nerfums.nerfumsservice.dataFactory.ModifierDataFactory;
import com.nerfums.nerfumsservice.delegate.mappers.ModifierDelegateMapper;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.resource.api.ModifierRO;
import com.nerfums.nerfumsservice.service.ModifierService;

public class ModifierDelegateTests
{
	private static ModifierService mockService;
	private static ModifierDelegateMapper mockMapper;
	private static ModifierDelegate spyDelegate;

	@BeforeAll
	static void beforeTests()
	{
		mockService = mock(ModifierService.class);
		mockMapper = mock(ModifierDelegateMapper.class);
		spyDelegate = spy(new ModifierDelegate(mockMapper, mockService));
	}

	@Test
	void getModifierByIdTest()
	{
		// Given
		ModifierRO expectedModifier = ModifierDataFactory.generateRandomModifierRO();

		when(mockService.getModifierById(anyLong())).thenReturn(ModifierDataFactory.generateRandomModifier());
		when(mockMapper.mapModifierToModifierRO(any(Modifier.class))).thenReturn(expectedModifier);

		// When
		ModifierRO actualModifier = spyDelegate.getModifierById(1l);

		// Then
		assertNotNull(actualModifier);
	}

	@Test
	void getAllModifiersTest()
	{
		// Given
		ModifierRO expectedModifier = ModifierDataFactory.generateRandomModifierRO();

		when(mockService.getAllModifiers()).thenReturn(Arrays.asList(ModifierDataFactory.generateRandomModifier()));
		when(mockMapper.mapModifierToModifierRO(any(Modifier.class))).thenReturn(expectedModifier);

		// When
		List<ModifierRO> actualModifier = spyDelegate.getAllModifiers();

		// Then
		assertNotNull(actualModifier);
	}

	@Test
	void createNewModifierTest()
	{
		// Given
		ModifierRO expectedModifier = ModifierDataFactory.generateRandomModifierRO();

		when(mockService.createNewModifier(any(Modifier.class))).thenReturn(ModifierDataFactory.generateRandomModifier());
		when(mockMapper.mapModifierROToModifier(any(ModifierRO.class))).thenReturn(ModifierDataFactory.generateRandomModifier());
		when(mockMapper.mapModifierToModifierRO(any(Modifier.class))).thenReturn(expectedModifier);

		// When
		ModifierRO actualModifier = spyDelegate.createNewModifier(expectedModifier);

		// Then
		assertNotNull(actualModifier);
	}
}
