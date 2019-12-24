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

	@Column(name = "contract_details")
	private String contractDetails;

	@Column(name = "contract_active")
	private Boolean contractActive;

	@ManyToOne
	@JoinColumn(name = "contract_completed_by_id")
	private UserDO contractCompletedBy;

	@ManyToMany
	@JoinTable
	(
		name = "contract_modifier_optionals_completed",
		joinColumns = @JoinColumn(name = "contract_id"),
		inverseJoinColumns = @JoinColumn(name = "modifier_id")
	)
	private List<ModifierDO> contractOptionalsCompleted;


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

	public String getContractDetails()
	{
		return contractDetails;
	}

	public Boolean getContractActive()
	{
		return contractActive;
	}

	public UserDO getContractCompletedBy()
	{
		return contractCompletedBy;
	}

	public List<ModifierDO> getContractOptionalsCompleted()
	{
		return contractOptionalsCompleted;
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

	public void setContractDetails(String contractDetails)
	{
		this.contractDetails = contractDetails;
	}

	public void setContractActive(Boolean contractActive)
	{
		this.contractActive = contractActive;
	}

	public void setContractCompletedBy(UserDO contractCompletedBy)
	{
		this.contractCompletedBy = contractCompletedBy;
	}

	public void setContractOptionalsCompleted(List<ModifierDO> contractOptionalsCompleted)
	{
		this.contractCompletedBy = contractCompletedBy;
	}
}
