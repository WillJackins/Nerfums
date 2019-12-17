package com.nerfums.nerfumsservice.model;

import java.util.List;

public class Contract
{
	private Long contractId;
	private User contractOwner;
	private User contractTarget;
	private Integer paymentAmount;
	private List<Modifier> requirements;
	private List<Modifier> optionals;


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

	public Integer getPaymentAmount() {
		return paymentAmount;
	}

	public List<Modifier> getRequirements() {
		return requirements;
	}

	public List<Modifier> getOptionals()
	{
		return optionals;
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

	public void setPaymentAmount(Integer paymentAmount)
	{
		this.paymentAmount = paymentAmount;
	}

	public void setRequirements(List<Modifier> requirements)
	{
		this.requirements = requirements;
	}

	public void setOptionals(List<Modifier> optionals)
	{
		this.optionals = optionals;
	}
}
