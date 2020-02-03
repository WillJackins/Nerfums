package com.nerfums.nerfumsservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nerfums.nerfumsservice.repository.api.UserDO;

public interface UserRepository extends JpaRepository<UserDO, Long> {
	@Query(value =
				   "select user " +
						   "from UserDO user " +
						   "where user.username = :username"
	)
	UserDO getUserByUsername(String username);
}
