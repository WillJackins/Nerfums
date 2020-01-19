package com.nerfums.nerfumsservice.model;

public class Session {
	private String token;
	private User user;

	public Session(String token, User user) {
		this.token = token;
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public User getUserRO() {
		return user;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setUserRO(User user) {
		this.user = user;
	}
}
