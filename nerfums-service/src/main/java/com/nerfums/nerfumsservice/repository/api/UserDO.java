package com.nerfums.nerfumsservice.repository.api;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class UserDO
{
    //region MEMBER VARIABLES
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "fullname")
    private String fullName;

    @Column(name = "available_cash")
    private Integer availableCash;

    @OneToMany(mappedBy = "contractOwner")
    private List<ContractDO> usersContracts;

    @OneToMany(mappedBy = "contractTarget")
    private List<ContractDO> userAsTargetContracts;

    @OneToMany(mappedBy = "contractCompletedBy")
    private List<ContractDO> userCompletedContracts;

    //endregion

    //region GETTERS
    public Long getUserId()
    {
        return userId;
    }

    public String getFullName()
    {
        return fullName;
    }

    public Integer getAvailableCash()
    {
        return availableCash;
    }

    public List<ContractDO> getUsersContracts()
    {
        return usersContracts;
    }

    public List<ContractDO> getUserAsTargetContracts()
    {
        return userAsTargetContracts;
    }

    public List<ContractDO> getUserCompletedContracts()
    {
        return userCompletedContracts;
    }
    //endregion

    //region SETTERS
    public void setUserId(Long userId)
    {
        this.userId = userId;
    }

    public void setFullName(String fullName)
    {
        this.fullName = fullName;
    }

    public void setAvailableCash(Integer availableCash)
    {
        this.availableCash = availableCash;
    }

    public void setUsersContracts(List<ContractDO> usersContracts)
    {
        this.usersContracts = usersContracts;
    }

    public void setUserAsTargetContracts(List<ContractDO> userAsTargetContracts)
    {
        this.userAsTargetContracts = userAsTargetContracts;
    }

    public void setUserCompletedContracts(List<ContractDO> userCompletedContracts)
    {
        this.userCompletedContracts = userCompletedContracts;
    }
    //endregion
}
