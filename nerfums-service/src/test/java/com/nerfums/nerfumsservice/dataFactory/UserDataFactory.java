package com.nerfums.nerfumsservice.dataFactory;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;
import static org.apache.commons.lang3.RandomStringUtils.randomNumeric;

import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.api.UserDO;
import com.nerfums.nerfumsservice.resource.api.UserRO;

public class UserDataFactory
{
    public static UserRO generateRandomUserRO()
    {
        UserRO userRO = new UserRO();
        userRO.setUserId(Long.parseLong(randomNumeric(3)));
		userRO.setAvailableCash(Integer.parseInt(randomNumeric(5)));
		userRO.setDisplayName(randomAlphabetic(10));
        return userRO;
    }

    public static User generateRandomUser()
    {
        User user = new User();
        user.setUserId(Long.parseLong(randomNumeric(3)));
		user.setAvailableCash(Integer.parseInt(randomNumeric(5)));
		user.setDisplayName(randomAlphabetic(10));
        return user;
    }

    public static UserDO generateRandomUserDO()
    {
        UserDO userDO = new UserDO();
        userDO.setUserId(Long.parseLong(randomNumeric(3)));
		userDO.setAvailableCash(Integer.parseInt(randomNumeric(5)));
		userDO.setDisplayName(randomAlphabetic(10));
        return userDO;
    }
}
