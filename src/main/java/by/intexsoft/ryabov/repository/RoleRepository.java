package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Role} entity
 */
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
