package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.Category;
import by.intexsoft.ryabov.repository.CategoryRepository;
import by.intexsoft.ryabov.service.ICategoryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    private final CategoryRepository categoryRepository;

    /**
     * Constructor
     */
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    /**
     * Find all {@link Category}s
     */
    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }
}
