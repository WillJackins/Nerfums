package com.nerfums.nerfumsservice.model;

import java.util.List;

public class Contract
{
	private Long contractId;
	private User contractOwner;
	private User contractTarget;
	private Integer contractReward;
	private List<Modifier> requirements;
	private List<Modifier> optionals;
	private String contractDetails;
	private Boolean contractActive;
	private User contractCompletedBy;
	private List<Modifier> contractOptionalsCompleted;

	public Long getContractId() {
		return contractId;
	}

	public User getContractOwner()
	{
		return contractOwner;
	}

	public User getContractTarget() {
		return contractTarget;
	}

	public Integer getContractReward() {
		return contractReward;
	}

	public List<Modifier> getRequirements() {
		return requirements;
	}

	public List<Modifier> getOptionals()
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

	public User getContractCompletedBy()
	{
		return contractCompletedBy;
	}

	public List<Modifier> getContractOptionalsCompleted()
	{
		return contractOptionalsCompleted;
	}


	public void setContractId(Long contractId)
	{
		this.contractId = contractId;
	}

	public void setContractOwner(User contractOwner)
	{
		this.contractOwner = contractOwner;
	}

	public void setContractTarget(User contractTarget)
	{
		this.contractTarget = contractTarget;
	}

	public void setContractReward(Integer contractReward)
	{
		this.contractReward = contractReward;
	}

	public void setRequirements(List<Modifier> requirements)
	{
		this.requirements = requirements;
	}

	public void setOptionals(List<Modifier> optionals)
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

	public void setContractCompletedBy(User contractCompletedBy)
	{
		this.contractCompletedBy = contractCompletedBy;
	}

	public void setContractOptionalsCompleted(List<Modifier> contractOptionalsCompleted)
	{
		this.contractOptionalsCompleted = contractOptionalsCompleted;
	}
}
