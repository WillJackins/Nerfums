package com.nerfums.nerfumsservice.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.nerfums.nerfumsservice.dataFactory.ModifierDataFactory;
import com.nerfums.nerfumsservice.model.Modifier;
import com.nerfums.nerfumsservice.repository.ModifierRepository;
import com.nerfums.nerfumsservice.repository.api.ModifierDO;
import com.nerfums.nerfumsservice.service.mappers.ModifierServiceMapper;

import common.exception.BusinessServiceException;

public class ModifierServiceTests
{
	private static ModifierRepository mockRepository;
	private static ModifierServiceMapper mockMapper;
	private static ModifierService spyService;

	@BeforeAll
	static void beforeAll()
	{
		mockRepository = mock(ModifierRepository.class);
		mockMapper = mock(ModifierServiceMapper.class);
		spyService = spy(new ModifierService(mockMapper, mockRepository));
	}

	@Test
	void getModifierByIdTest()
	{
		// Given
		Modifier expectedModifier = ModifierDataFactory.generateRandomModifier();

		when(mockRepository.findById(anyLong())).thenReturn(Optional.of(ModifierDataFactory.generateRandomModifierDO()));
		when(mockMapper.mapModifierDOToModifier(any(ModifierDO.class))).thenReturn(expectedModifier);

		// When
		Modifier actualModifier = spyService.getModifierById(1l);

		// Then
		assertNotNull(actualModifier);
	}

	@Test
	void getModifierByIdTest_NotFoundFail()
	{
		when(mockRepository.findById(anyLong())).thenReturn(Optional.of(ModifierDataFactory.generateRandomModifierDO()));
		when(mockMapper.mapModifierDOToModifier(any(ModifierDO.class))).thenReturn(null);

		assertThrows(BusinessServiceException.class, () -> spyService.getModifierById(0l));
	}

	@Test
	void getAllModifiersTest()
	{
		// Given
		Modifier expectedModifier = ModifierDataFactory.generateRandomModifier();

		when(mockRepository.findAll()).thenReturn(Arrays.asList(ModifierDataFactory.generateRandomModifierDO()));
		when(mockMapper.mapModifierDOToModifier(any(ModifierDO.class))).thenReturn(expectedModifier);

		// When
		List<Modifier> actualModifier = spyService.getAllModifiers();

		// Then
		assertNotNull(actualModifier);
	}

	@Test
	void createNewModifierTest()
	{
		// Given
		Modifier modifier = ModifierDataFactory.generateRandomModifier();
		ModifierDO modifierDO = ModifierDataFactory.generateRandomModifierDO();

		when(mockRepository.save(any(ModifierDO.class))).thenReturn(ModifierDataFactory.generateRandomModifierDO());
		when(mockMapper.mapModifierToModifierDO(any(Modifier.class))).thenReturn(modifierDO);
		when(mockMapper.mapModifierDOToModifier(any(ModifierDO.class))).thenReturn(modifier);

		// When
		Modifier actualModifier = spyService.createNewModifier(modifier);

		// Then
		assertNotNull(actualModifier);
	}
}
