package com.nerfums.nerfumsservice.repository.api;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "modifiers")
public class ModifierDO
{
	@Id
	@Column(name = "modifier_id")
	private Long modifierId;

	@Column(name = "modifier_title")
	private String modifierTitle;

	@Column(name = "modifier_description")
	private String modifierDescription;

	@Column(name = "modifier_value")
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
