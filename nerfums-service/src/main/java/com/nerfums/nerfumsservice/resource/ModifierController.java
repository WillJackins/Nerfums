package com.nerfums.nerfumsservice.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nerfums.nerfumsservice.delegate.ModifierDelegate;
import com.nerfums.nerfumsservice.resource.api.ModifierRO;

@RestController
@RequestMapping("/modifiers")
public class ModifierController
{
	private final ModifierDelegate modifierDelegate;

	@Autowired
	public ModifierController(ModifierDelegate modifierDelegate)
	{
		super();
		this.modifierDelegate = modifierDelegate;
	}

	@GetMapping("/{modifierId}")
	public ResponseEntity<ModifierRO> getModifierById(@PathVariable Long modifierId)
	{
		ModifierRO modifierRO = modifierDelegate.getModifierById(modifierId);
		return ResponseEntity.ok(modifierRO);
	}

	@GetMapping
	public ResponseEntity<List<ModifierRO>> getAllModifiers()
	{
		List<ModifierRO> modifiers = modifierDelegate.getAllModifiers();
		return ResponseEntity.ok(modifiers);
	}

	@PostMapping
	public ResponseEntity<ModifierRO> createNewModifier(@RequestBody ModifierRO modifierRO)
	{
		ModifierRO createdModifier = modifierDelegate.createNewModifier(modifierRO);
		return ResponseEntity.ok(createdModifier);
	}
}
