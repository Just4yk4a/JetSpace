package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.Driver;
import by.intexsoft.ryabov.entity.User;
import by.intexsoft.ryabov.service.IDriverService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for working with user
 */
@CrossOrigin
@RestController
@RequestMapping("/drivers")
public class DriverController {
    private final IDriverService driverService;

    /**
     * Default constructor
     */
    public DriverController(IDriverService driverService) {
        this.driverService = driverService;
    }


    /**
     * Get all users
     */
    @GetMapping
    public List<Driver> getAll() {
        return driverService.getAll();
    }
}
