package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.Driver;
import by.intexsoft.ryabov.repository.DriverRepository;
import by.intexsoft.ryabov.service.IDriverService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service for {@link Driver} entity
 */
@Service
public class DriverService implements IDriverService {
    private final DriverRepository driverRepository;

    /**
     * Constructor
     */
    public DriverService(DriverRepository driverRepository) {
        this.driverRepository = driverRepository;
    }

    /**
     * Find all {@link Driver}s
     */
    @Override
    public List<Driver> findAll() {
        return driverRepository.findAll();
    }
}
