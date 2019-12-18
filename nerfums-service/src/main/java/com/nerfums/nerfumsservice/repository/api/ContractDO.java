package com.nerfums.nerfumsservice.repository.api;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "contracts")
public class ContractDO
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "contract_id")
	private Long contractId;

	@ManyToOne
	@JoinColumn(name = "contract_owner_id")
	private UserDO contractOwner;

	@ManyToOne
	@JoinColumn(name = "contract_target_id")
	private UserDO contractTarget;

	@Column(name = "contract_payment")
	private Integer contractReward;

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

	public UserDO getContractOwner()
	{
		return contractOwner;
	}

	public UserDO getContractTarget()
	{
		return contractTarget;
	}

	public Integer getContractReward()
	{
		return contractReward;
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

	public void setContractOwner(UserDO contractOwner)
	{
		this.contractOwner = contractOwner;
	}

	public void setContractTarget(UserDO targetName)
	{
		this.contractTarget = targetName;
	}

	public void setContractReward(Integer paymentAmount)
	{
		this.contractReward = paymentAmount;
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
