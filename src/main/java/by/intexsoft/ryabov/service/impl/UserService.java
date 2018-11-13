package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.User;
import by.intexsoft.ryabov.repository.UserRepository;
import by.intexsoft.ryabov.service.IUserService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service for {@link User} entity
 */
@Service
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Constructor
     */
    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    /**
     * Find {@link User} by username
     */
    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    /**
     * Find all {@link User}s
     */
    @Override
    public List<User> findAll() {
        List<User> users = userRepository.findAll();
        for (User user :
                users) {
            user.password = null;
        }
        return users;
    }

    /**
     * Save {@link User}
     */
    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    /**
     * Delete {@link User} by id
     */
    @Override
    public void delete(int id) {
        userRepository.deleteById(id);
    }
}
