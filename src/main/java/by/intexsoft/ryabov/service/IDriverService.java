package by.intexsoft.ryabov.service;

import by.intexsoft.ryabov.entity.Driver;

import java.util.List;

/**
 * Service for working with {@link  Driver}
 */
public interface IDriverService {

    /**
     * Get all {@link Driver}
     */
    List<Driver> findAll();
}
