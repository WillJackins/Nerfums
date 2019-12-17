package com.nerfums.nerfumsservice.repository.api;

import java.util.List;

import javax.persistence.*;

import com.nerfums.nerfumsservice.model.Contract;

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

	@ManyToMany(mappedBy = "requirements")
	private List<ContractDO> contractRequirements;

	@ManyToMany(mappedBy = "optionals")
	private List<ContractDO> contractOptionals;


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

	public List<ContractDO> getContractRequirements()
	{
		return contractRequirements;
	}

	public List<ContractDO> getContractOptionals()
	{
		return contractOptionals;
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

	public void setContractRequirements(List<ContractDO> contractRequirements)
	{
		this.contractRequirements = contractRequirements;
	}

	public void setContractOptionals(List<ContractDO> contractOptionals)
	{
		this.contractOptionals = contractOptionals;
	}
}
