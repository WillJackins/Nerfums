package com.nerfums.nerfumsservice.repository.api;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contracts")
public class ContractDO
{
	@Id
	@Column(name = "contractId")
	private Long contractId;

	@Column(name = "contractOwner")
	private String contractOwner;

	@Column(name = "targetName")
	private String targetName;

	@Column(name = "contractPayment")
	private Integer paymentAmount;

	//@Column(name = "contractRequirements")
	//private String requirements;


	public Long getContractId()
	{
		return contractId;
	}

	public String getContractOwner()
	{
		return contractOwner;
	}

	public String getTargetName()
	{
		return targetName;
	}

	public Integer getPaymentAmount()
	{
		return paymentAmount;
	}

//	public String getRequirements()
//	{
//		return requirements;
//	}


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

//	public void setRequirements(String requirements)
//	{
//		this.requirements = requirements;
//	}
}
