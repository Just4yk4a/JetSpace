package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Driver} entity
 */
public interface DriverRepository extends JpaRepository<Driver,Integer> {
}
