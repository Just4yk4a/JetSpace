package by.intexsoft.ryabov.service;

import by.intexsoft.ryabov.entity.User;

import java.util.List;

/**
 * Service for working with {@link User}
 */
public interface IUserService {
    /**
     * Find {@link User} by name
     */
    User findByUsername(String username);

    /**
     * Get all {@link User}
     */
    List<User> findAll();

    /**
     * Add {@link User} to DB
     */
    User save(User user);

    /**
     * Delete {@link User} by id
     */
    void delete(int id);
}
