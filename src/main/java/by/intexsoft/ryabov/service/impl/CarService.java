package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.Car;
import by.intexsoft.ryabov.repository.CarRepository;
import by.intexsoft.ryabov.service.ICarService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service for {@link Car} entity
 */
@Service
public class CarService implements ICarService {
    private final CarRepository carRepository;

    /**
     * Constructor
     */
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    /**
     * Find all {@link Car}s
     */
    @Override
    public List<Car> findAll() {
        return carRepository.findAll();
    }

    /**
     * Find {@link Car} by id
     */
    @Override
    public Car findById(int id) {
        return carRepository.findById(id).get();
    }

    /**
     * Add {@link Car} to DB
     */
    @Override
    public Car save(Car order) {
        return carRepository.save(order);
    }

    /**
     * Delete by id
     */
    @Override
    public void delete(int id) {
        carRepository.deleteById(id);
    }
}
