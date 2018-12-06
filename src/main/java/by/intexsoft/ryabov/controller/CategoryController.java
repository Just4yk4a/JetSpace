package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.Category;
import by.intexsoft.ryabov.entity.User;
import by.intexsoft.ryabov.service.ICategoryService;
import by.intexsoft.ryabov.service.IUserService;
import by.intexsoft.ryabov.service.impl.UserService;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.web.bind.annotation.*;

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
