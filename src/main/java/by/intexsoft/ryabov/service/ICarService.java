package by.intexsoft.ryabov.service;

import by.intexsoft.ryabov.entity.Car;

import java.util.List;

/**
 * Service for working with {@link Car}
 */
public interface ICarService {

    /**
     * Get all cars
     */
    List<Car> findAll();

    /**
     * Find {@link Car} by id
     */
    Car findById(int id);

    /**
     * Add {@link Car} to DB
     */
    Car save(Car order);

    /**
     * Delete by id
     */
    void delete(int id);
}
