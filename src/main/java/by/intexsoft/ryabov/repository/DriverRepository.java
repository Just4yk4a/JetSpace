package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the User entity
 */
public interface DriverRepository extends JpaRepository<User, Integer> {
}
