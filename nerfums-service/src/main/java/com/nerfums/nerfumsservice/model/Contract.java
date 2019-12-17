package com.nerfums.nerfumsservice.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Id;

public class Contract
{
	private Long contractId;
	private String contractOwner;
	private String targetName;
	private Integer paymentAmount;
	private List<Modifier> requirements;
	private List<Modifier> optionals;


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

	public void setRequirements(List<Modifier> requirements)
	{
		this.requirements = requirements;
	}

	public void setOptionals(List<Modifier> optionals)
	{
		this.optionals = optionals;
	}
}
