package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Category} entity
 */
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
