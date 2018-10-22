package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Slf4j
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserService userService;

    /*public UserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }*/

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findByUsername(username);
        Set<GrantedAuthority> roles = new HashSet<>();
        System.out.println(user.role.type);
        roles.add(new SimpleGrantedAuthority(user.role.type));

        return new org.springframework.security.core.userdetails.User(user.username,
                        user.password,
                        roles);
    }
}
