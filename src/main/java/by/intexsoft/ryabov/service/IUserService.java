package by.intexsoft.ryabov.service;

import by.intexsoft.ryabov.entity.User;

import java.util.List;

/**
 * Service for working with {@link User}
 */
public interface IUserService {
    /**
     * Find user by name
     */
    User findByUsername(String username);

    /**
     * Get all user
     */
    List<User> findAll();

    /**
     * Add user to DB
     */
    User save(User user);

    /**
     * Delete user by id
     */
    void delete(int id);
}
