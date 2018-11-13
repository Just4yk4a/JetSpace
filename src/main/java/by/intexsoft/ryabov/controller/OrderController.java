package by.intexsoft.ryabov.controller;

import by.intexsoft.ryabov.entity.Order;
import by.intexsoft.ryabov.service.impl.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for working with {@link Order}
 */
@RestController
@RequestMapping("/orders")
public class OrderController {
    private final OrderService orderService;

    /**
     * Default constructor
     */
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    /**
     * Get all users
     */
    @PostMapping
    public Order save(@RequestBody Order order) {
        return orderService.save(order);
    }

    /**
     * Get all {@link Order}s
     */
    @GetMapping
    public List<Order> getAll() {
        return orderService.findAll();
    }
}
