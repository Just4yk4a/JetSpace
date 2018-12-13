package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.Category;
import by.intexsoft.ryabov.service.ICategoryService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller for working with user
 */
@CrossOrigin
@RestController
@RequestMapping("/categories")
public class CategoryController {
    private final ICategoryService categoryService;

    /**
     * Default constructor
     */
    public CategoryController(ICategoryService categoryService) {
        this.categoryService = categoryService;
    }

    /**
     * Get all {@link Category}s
     */
    @GetMapping
    public List<Category> getAll() {
        return categoryService.findAll();
    }
}
