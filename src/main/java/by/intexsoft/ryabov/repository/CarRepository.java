package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Car} entity
 */
public interface CarRepository extends JpaRepository<Car, Integer> {
}
