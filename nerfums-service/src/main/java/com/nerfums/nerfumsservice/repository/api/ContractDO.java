package com.nerfums.nerfumsservice.repository.api;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "contracts")
public class ContractDO
{
	@Id
	@Column(name = "contract_id")
	private Long contractId;

	@Column(name = "contract_owner")
	private String contractOwner;

	@Column(name = "target_name")
	private String targetName;

	@Column(name = "contract_payment")
	private Integer paymentAmount;

	@ManyToMany
	@JoinTable
	(
		name = "contract_modifier_requirements",
		joinColumns = @JoinColumn(name = "contract_id"),
		inverseJoinColumns = @JoinColumn(name = "modifier_id")
	)
	private List<ModifierDO> requirements;

	@ManyToMany
	@JoinTable
	(
		name = "contract_modifier_optionals",
		joinColumns = @JoinColumn(name = "contract_id"),
		inverseJoinColumns = @JoinColumn(name = "modifier_id")
	)
	private List<ModifierDO> optionals;


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

	public List<ModifierDO> getRequirements()
	{
		return requirements;
	}

	public List<ModifierDO> getOptionals()
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

	public void setRequirements(List<ModifierDO> requirements)
	{
		this.requirements = requirements;
	}

	public void setOptionals(List<ModifierDO> optionals)
	{
		this.optionals = optionals;
	}
}
