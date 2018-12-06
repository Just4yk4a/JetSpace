package by.intexsoft.ryabov.service;

import by.intexsoft.ryabov.entity.Category;

import java.util.List;

public interface ICategoryService {
    /**
     * Find all {@link Category}s
     */
    List<Category> findAll();
}
