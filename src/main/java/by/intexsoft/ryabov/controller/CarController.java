package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.Car;
import by.intexsoft.ryabov.service.impl.CarService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for working with {@link Car}
 */
@RestController
@RequestMapping("/cars")
public class CarController {
    private final CarService carService;

    /**
     * Default constructor
     */
    public CarController(CarService carService) {
        this.carService = carService;
    }

    /**
     * Get all {@link Car}s
     */
    @GetMapping
    public List<Car> getAll() {
        return carService.findAll();
    }

    /**
     * Get {@link Car} by id
     */
    @GetMapping("/{id}")
    public Car load(@PathVariable(value = "id") int id) {
        return carService.findById(id);
    }

    /**
     * Save {@link Car}
     */
    @PostMapping
    public Car save(@RequestBody Car car) {
        return carService.save(car);
    }

    /**
     * Delete {@link Car} by id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        carService.delete(id);
    }
}
