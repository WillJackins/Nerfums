package com.nerfums.nerfumsservice.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.service.TokenService;
import com.nerfums.nerfumsservice.service.UserService;

@Component
public class AuthenticationFilter extends OncePerRequestFilter {
	private UserService userService;
	private TokenService tokenService;

	@Autowired
	public AuthenticationFilter(UserService userService, TokenService tokenService) {
		super();
		this.userService = userService;
		this.tokenService = tokenService;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
		String authorizationHeader = request.getHeader("Authorization");

		String token = null;
		String username = null;

		if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
			token = authorizationHeader.substring(7);
			username = tokenService.getUsernameFromToken(token);
		}

		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			User user = (User) userService.loadUserByUsername(username);

			if (tokenService.validateToken(token, user)) {
				UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
				authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			}
		}

		chain.doFilter(request, response);
	}
}
