package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
