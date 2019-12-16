package com.nerfums.nerfumsservice.resource.api;

public class ModifierRO
{
	private Long modifierId;
	private String modifierTitle;
	private String modifierDescription;
	private Integer modifierValue;


	public Long getModifierId()
	{
		return modifierId;
	}

	public String getModifierTitle()
	{
		return modifierTitle;
	}

	public String getModifierDescription()
	{
		return modifierDescription;
	}

	public Integer getModifierValue()
	{
		return modifierValue;
	}


	public void setModifierId(Long modifierId)
	{
		this.modifierId = modifierId;
	}

	public void setModifierTitle(String modifierTitle)
	{
		this.modifierTitle = modifierTitle;
	}

	public void setModifierDescription(String modifierDescription)
	{
		this.modifierDescription = modifierDescription;
	}

	public void setModifierValue(Integer modifierValue)
	{
		this.modifierValue = modifierValue;
	}
}
