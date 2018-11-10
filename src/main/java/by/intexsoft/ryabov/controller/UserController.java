package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.User;
import by.intexsoft.ryabov.service.IUserService;
import by.intexsoft.ryabov.service.impl.UserService;
import jdk.nashorn.internal.parser.JSONParser;
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
    public List<User> getAll() {
        return userService.findAll();
    }

    /**
     * Add new user and returns saved object
     */
    @PostMapping
    public User create(@RequestBody User user) {
        if (userService.findByUsername(user.username) != null){
            return null;
        }
        return userService.save(user);
    }

    /**
     * Delete user
     */
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") int id) {
        userService.delete(id);
    }
}
