package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.User;
import by.intexsoft.ryabov.service.IUserService;
import by.intexsoft.ryabov.service.impl.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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
     * Get all {@link User}s
     */
    @GetMapping
    public List<User> getAll() {
        return userService.findAll();
    }

    /**
     * Get {@link User}s by date
     */
    @GetMapping(value = "/{date}")
    public List<User> getUsersByDate(@PathVariable("date") long date) {
        Date dd = new Date(date);
        return userService.getFreeUsersByDate(dd);
    }

    /**
     * Add new {@link User} and returns saved object
     */
    @PostMapping
    public User create(@RequestBody User user) {
        if (userService.findByUsername(user.username) != null) {
            return null;
        }
        return userService.save(user);
    }

    /**
     * Delete {@link User} by id
     */
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") int id) {
        userService.delete(id);
    }
}
