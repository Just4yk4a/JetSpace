package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.User;
import by.intexsoft.ryabov.repository.UserRepository;
import by.intexsoft.ryabov.service.IUserService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    /**
     * Find user by username
     */
    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    /**
     * Find all users
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
     * Save user
     */
    @Override
    public User save(User user) {
            return userRepository.save(user);
    }

    /**
     * Delete user by id
     */
    @Override
    public void delete(int id) {
        userRepository.deleteById(id);
    }
}
