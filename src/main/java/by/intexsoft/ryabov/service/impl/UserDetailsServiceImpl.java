package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Set;

/**
 * Service for auth user
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserService userService;

    /**
     * Constructor
     */
    public UserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }

    /**
     * Get authorised {@link User}
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        Set<GrantedAuthority> roles = Collections.singleton(new SimpleGrantedAuthority(user.role.type));
        return new org.springframework.security.core.userdetails.User(user.username,
                user.password,
                roles);
    }
}
