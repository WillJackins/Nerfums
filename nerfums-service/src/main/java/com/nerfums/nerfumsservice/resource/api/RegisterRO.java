package com.nerfums.nerfumsservice.resource.api;

public class RegisterRO {
	private String displayName;
	private String username;
	private String password;

	public String getDisplayName() {
		return displayName;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
