package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.Car;
import by.intexsoft.ryabov.service.impl.CarService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {
    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public List<Car> getAll(){
        return carService.getAll();
    }
}
