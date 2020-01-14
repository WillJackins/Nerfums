package com.nerfums.nerfumsservice.resource.api;

import java.util.List;

import com.sun.org.apache.xpath.internal.operations.Bool;

public class ContractRO
{
	private Long contractId;
	private UserRO contractOwner;
	private UserRO contractTarget;
	private Integer contractReward;
	private List<ModifierRO> requirements;
	private List<ModifierRO> optionals;
	private String contractDetails;
	private Boolean contractActive;
	private UserRO contractCompletedBy;
	private List<ModifierRO> contractOptionalsCompleted;


	public Long getContractId() {
		return contractId;
	}

	public UserRO getContractOwner()
	{
		return contractOwner;
	}

	public UserRO getContractTarget() {
		return contractTarget;
	}

	public Integer getContractReward() {
		return contractReward;
	}

	public List<ModifierRO> getRequirements() {
		return requirements;
	}

	public List<ModifierRO> getOptionals()
	{
		return optionals;
	}

	public String getContractDetails()
	{
		return contractDetails;
	}

	public Boolean getContractActive()
	{
		return contractActive;
	}

	public UserRO getContractCompletedBy()
	{
		return contractCompletedBy;
	}

	public List<ModifierRO> getContractOptionalsCompleted()
	{
		return contractOptionalsCompleted;
	}


	public void setContractId(Long contractId)
	{
		this.contractId = contractId;
	}

	public void setContractOwner(UserRO contractOwner)
	{
		this.contractOwner = contractOwner;
	}

	public void setContractTarget(UserRO contractTarget)
	{
		this.contractTarget = contractTarget;
	}

	public void setContractReward(Integer contractReward)
	{
		this.contractReward = contractReward;
	}

	public void setRequirements(List<ModifierRO> requirements)
	{
		this.requirements = requirements;
	}

	public void setOptionals(List<ModifierRO> optionals)
	{
		this.optionals = optionals;
	}

	public void setContractDetails(String contractDetails)
	{
		this.contractDetails = contractDetails;
	}

	public void setContractActive(Boolean contractActive)
	{
		this.contractActive = contractActive;
	}

	public void setContractCompletedBy(UserRO contractCompletedBy)
	{
		this.contractCompletedBy = contractCompletedBy;
	}

	public void setContractOptionalsCompleted(List<ModifierRO> contractOptionalsCompleted)
	{
		this.contractOptionalsCompleted = contractOptionalsCompleted;
	}
}
