package com.nerfums.nerfumsservice.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nerfums.nerfumsservice.delegate.ContractDelegate;
import com.nerfums.nerfumsservice.delegate.UserDelegate;
import com.nerfums.nerfumsservice.resource.api.ContractRO;
import com.nerfums.nerfumsservice.resource.api.UserRO;
@RestController
@RequestMapping("users")
public class UserController
{
    private final UserDelegate userDelegate;
    private final ContractDelegate contractDelegate;

    @Autowired
    public UserController(UserDelegate userDelegate, ContractDelegate contractDelegate)
    {
        super();
        this.userDelegate = userDelegate;
        this.contractDelegate = contractDelegate;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserRO> getUserById(@PathVariable Long userId)
    {
        UserRO userRO = userDelegate.getUserById(userId);
        return ResponseEntity.ok(userRO);
    }

    @GetMapping("/{ownerId}/contracts")
    public ResponseEntity<List<ContractRO>> getAllContractsByOwnerId(
            @PathVariable Long ownerId,
            @RequestParam(name = "activeContracts") Boolean activeContracts
    ) {
        List<ContractRO> userContracts = contractDelegate.getAllContractsByOwnerId(ownerId, activeContracts);
        return ResponseEntity.ok(userContracts);
    }

    @GetMapping()
    public ResponseEntity<List<UserRO>> getAllUsers()
    {
        List<UserRO> users = userDelegate.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UserRO> createNewUser(@RequestBody UserRO userRO)
    {
        UserRO createdUser = userDelegate.createNewUser(userRO);
        return ResponseEntity.ok(createdUser);
    }
}
