package com.nerfums.nerfumsservice.resource.api;

import java.util.List;

public class ContractRO
{
	private Long contractId;
	private String contractOwner;
	private String targetName;
	private Integer paymentAmount;
	private List<ModifierRO> requirements;
	private List<ModifierRO> optionals;


	public Long getContractId() {
		return contractId;
	}

	public String getContractOwner()
	{
		return contractOwner;
	}

	public String getTargetName() {
		return targetName;
	}

	public Integer getPaymentAmount() {
		return paymentAmount;
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

	public void setContractOwner(String contractOwner)
	{
		this.contractOwner = contractOwner;
	}

	public void setTargetName(String targetName)
	{
		this.targetName = targetName;
	}

	public void setPaymentAmount(Integer paymentAmount)
	{
		this.paymentAmount = paymentAmount;
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
