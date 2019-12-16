package com.nerfums.nerfumsservice.dataFactory;

import com.nerfums.nerfumsservice.model.User;
import com.nerfums.nerfumsservice.repository.api.UserDO;
import com.nerfums.nerfumsservice.resource.api.UserRO;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;
import static org.apache.commons.lang3.RandomStringUtils.randomNumeric;

public class UserDataFactory
{
    public static UserRO generateRandomUserRO()
    {
        UserRO userRO = new UserRO();
        userRO.setUserId(Long.parseLong(randomNumeric(3)));
        userRO.setAvailableCash(Integer.parseInt(randomNumeric( 5)));
        userRO.setFullName(randomAlphabetic(10));
        return userRO;
    }

    public static User generateRandomUser()
    {
        User user = new User();
        user.setUserId(Long.parseLong(randomNumeric(3)));
        user.setAvailableCash(Integer.parseInt(randomNumeric( 5)));
        user.setFullName(randomAlphabetic(10));
        return user;
    }

    public static UserDO generateRandomUserDO()
    {
        UserDO userDO = new UserDO();
        userDO.setUserId(Long.parseLong(randomNumeric(3)));
        userDO.setAvailableCash(Integer.parseInt(randomNumeric( 5)));
        userDO.setFullName(randomAlphabetic(10));
        return userDO;
    }
}
