package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.User;
import by.intexsoft.ryabov.service.IUserService;
import by.intexsoft.ryabov.service.impl.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for working with user
 */
@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    private final IUserService userService;

    /**
     * Default constructor
     */
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Get all users
     */
    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }

    /**
     * Add new user and returns saved object
     */
    @PostMapping
    public User create(@RequestBody User user) {
        return userService.save(user);
    }
}
