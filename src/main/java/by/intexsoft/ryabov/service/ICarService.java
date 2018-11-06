package by.intexsoft.ryabov.service;

import by.intexsoft.ryabov.entity.Car;

import java.util.List;

public interface ICarService {

    /**
     * Get all cars
     */
    List<Car> getAll();
}
