package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Integer> {
}
