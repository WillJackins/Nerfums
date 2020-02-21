package com.nerfums.nerfumsservice.resource.api;

public class SessionRO {
	private String token;
	private UserRO userRO;

	public SessionRO() {

	}

	public SessionRO(String token, UserRO userRO) {
		this.token = token;
		this.userRO = userRO;
	}

	public String getToken() {
		return token;
	}

	public UserRO getUserRO() {
		return userRO;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setUserRO(UserRO userRO) {
		this.userRO = userRO;
	}
}
