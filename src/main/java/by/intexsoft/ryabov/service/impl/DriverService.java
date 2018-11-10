package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.Driver;
import by.intexsoft.ryabov.repository.DriverRepository;
import by.intexsoft.ryabov.service.IDriverService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverService implements IDriverService {
    private final DriverRepository driverRepository;

    public DriverService(DriverRepository driverRepository) {
        this.driverRepository = driverRepository;
    }

    @Override
    public List<Driver> getAll() {
        return driverRepository.findAll();
    }
}
