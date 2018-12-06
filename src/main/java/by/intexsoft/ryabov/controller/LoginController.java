package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.User;
import by.intexsoft.ryabov.service.IUserService;
import by.intexsoft.ryabov.service.impl.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for working with Auth User
 */
@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginController {
    private final IUserService userService;

    /**
     * Default constructor
     */
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Get authorised user
     */
    @GetMapping
    public User getAuthorize() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userService.findByUsername(((org.springframework.security.core.userdetails.User) auth.getPrincipal()).getUsername());
    }
}
