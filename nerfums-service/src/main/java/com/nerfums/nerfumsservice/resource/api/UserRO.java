package com.nerfums.nerfumsservice.resource.api;

public class UserRO
{
    //region MEMBER VARIABLES
    private Long userId;
    private String fullName;
    private Integer availableCash;
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
    //endregion
}
