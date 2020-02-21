package com.nerfums.nerfumsservice.resource.api;

public class UserRO {
	//region MEMBER VARIABLES
	private Long userId;
	private String displayName;
	private Integer availableCash;
	private Integer committedCash;
	private String userAvatarURL;
	//endregion

	//region GETTERS
	public Long getUserId() {
		return userId;
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

	public String getUserAvatarURL() {
		return userAvatarURL;
	}
	//endregion

	//region SETTERS
	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public void setAvailableCash(Integer availableCash) {
		this.availableCash = availableCash;
	}

	public void setCommittedCash(Integer committedCash) {
		this.committedCash = committedCash;
	}

	public void setUserAvatarURL(String userAvatarURL) {
		this.userAvatarURL = userAvatarURL;
	}
	//endregion
}
