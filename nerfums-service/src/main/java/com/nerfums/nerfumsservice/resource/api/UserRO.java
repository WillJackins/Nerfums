package com.nerfums.nerfumsservice.resource.api;

public class UserRO {
	//region MEMBER VARIABLES
	private Long userId;
	private String displayName;
	private Integer availableCash;
	private Integer committedCash;
	private String userAvatar;
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

	public String getUserAvatar() { return userAvatar; }
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

	public void setUserAvatar(String userAvatar) { this.userAvatar = userAvatar; }
	//endregion
}
