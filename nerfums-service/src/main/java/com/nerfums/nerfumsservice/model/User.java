package com.nerfums.nerfumsservice.model;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class User implements UserDetails {
	private Long userId;
	private String username;
	private String passwordHash;
	private String displayName;
	private Integer availableCash;

	public User() {
		super();
	}

	public User(String username, String passwordHash) {
		super();
		this.username = username;
		this.passwordHash = passwordHash;
	}


	public Long getUserId() {
		return userId;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public String getPassword() {
		return passwordHash;
	}

	public String getDisplayName() {
		return displayName;
	}

	public Integer getAvailableCash() {
		return availableCash;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String passwordHash) {
		this.passwordHash = passwordHash;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public void setAvailableCash(Integer availableCash) {
		this.availableCash = availableCash;
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return new ArrayList<>();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
