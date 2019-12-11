package com.nerfums.nerfumsservice.resource.api;

public class ContractRO
{
	private Long contractId;
	private String targetName;
	private Integer paymentAmount;
	private String requirements;


	public Long getContractId()
	{
		return contractId;
	}

	public String getTargetName()
	{
		return targetName;
	}

	public Integer getPaymentAmount()
	{
		return paymentAmount;
	}

	public String getRequirements()
	{
		return requirements;
	}


	public void setContractId(Long contractId)
	{
		this.contractId = contractId;
	}

	public void setTargetName(String targetName)
	{
		this.targetName = targetName;
	}

	public void setPaymentAmount(Integer paymentAmount)
	{
		this.paymentAmount = paymentAmount;
	}

	public void setRequirements(String requirements)
	{
		this.requirements = requirements;
	}
}
