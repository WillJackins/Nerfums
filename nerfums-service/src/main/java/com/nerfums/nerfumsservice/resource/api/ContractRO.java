package com.nerfums.nerfumsservice.resource.api;

import java.util.List;

public class ContractRO
{
	private Long contractId;
	private UserRO contractOwner;
	private UserRO contractTarget;
	private Integer contractReward;
	private List<ModifierRO> requirements;
	private List<ModifierRO> optionals;


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
}
