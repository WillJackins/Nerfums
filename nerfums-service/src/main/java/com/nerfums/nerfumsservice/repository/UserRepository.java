package com.nerfums.nerfumsservice.repository;

import com.nerfums.nerfumsservice.repository.api.UserDO;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserDO, Long>
{
}
