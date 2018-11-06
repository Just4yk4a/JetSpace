package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.Car;
import by.intexsoft.ryabov.repository.CarRepository;
import by.intexsoft.ryabov.service.ICarService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements ICarService {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public List<Car> getAll() {
        return carRepository.findAll();
    }
}
