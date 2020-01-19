package com.nerfums.nerfumsservice.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.nerfums.nerfumsservice.repository.api.UserDO;

public interface UserRepository extends CrudRepository<UserDO, Long> {
	@Query(value =
				   "select user " +
						   "from UserDO user " +
						   "where user.username = :username"
	)
	UserDO getUserByUsername(String username);
}
