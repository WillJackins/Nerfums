package com.nerfums.nerfumsservice.repository.api;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class UserDO {
    //region MEMBER VARIABLES
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "username")
    private String username;

    @Column(name = "password_hash")
	private String passwordHash;

	@Column(name = "display_name")
	private String displayName;

	@Column(name = "available_cash")
	private Integer availableCash;

	@Column(name = "committed_cash")
	private Integer committedCash;

	@Column(name = "user_avatar")
	private String userAvatar;

	@Column(name = "user_avatar_url")
	private String userAvatarURL;

	@OneToMany(mappedBy = "contractOwner")
	private List<ContractDO> usersContracts;

	@OneToMany(mappedBy = "contractTarget")
	private List<ContractDO> userAsTargetContracts;

	@OneToMany(mappedBy = "contractCompletedBy")
	private List<ContractDO> userCompletedContracts;

    //endregion

    //region GETTERS
    public Long getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public String getDisplayName() {
		return displayName;
	}

	public Integer getAvailableCash() {
		return availableCash;
	}

	public Integer getCommittedCash() {
		return committedCash;
	}

	public String getUserAvatar() {
		return userAvatar;
	}

	public String getUserAvatarURL() {
		return userAvatarURL;
	}

	public List<ContractDO> getUsersContracts() {
		return usersContracts;
	}

	public List<ContractDO> getUserAsTargetContracts() {
        return userAsTargetContracts;
    }

    public List<ContractDO> getUserCompletedContracts()
    {
        return userCompletedContracts;
    }
    //endregion

    //region SETTERS
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setUsername(String loginId) {
        this.username = loginId;
    }

    public void setPasswordHash(String password) {
        this.passwordHash = password;
    }

    public void setDisplayName(String fullName) {
		this.displayName = fullName;
	}

	public void setAvailableCash(Integer availableCash) {
		this.availableCash = availableCash;
	}

	public void setCommittedCash(Integer committedCash) {
		this.committedCash = committedCash;
	}

	public void setUserAvatar(String userAvatar) {
		this.userAvatar = userAvatar;
	}

	public void setUserAvatarURL(String userAvatar) {
		this.userAvatarURL = userAvatar;
	}

	public void setUsersContracts(List<ContractDO> usersContracts) {
		this.usersContracts = usersContracts;
	}

	public void setUserAsTargetContracts(List<ContractDO> userAsTargetContracts) {
        this.userAsTargetContracts = userAsTargetContracts;
    }

    public void setUserCompletedContracts(List<ContractDO> userCompletedContracts)
    {
        this.userCompletedContracts = userCompletedContracts;
    }
    //endregion
}
