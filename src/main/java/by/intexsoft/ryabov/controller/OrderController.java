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
     * Find all {@link Order}s
     */
    @GetMapping
    public List<Order> getAll() {
        return orderService.findAll();
    }

    /**
     * Find all {@link Order}a by user id
     */
    @GetMapping("/driver={id}")
    public List<Order> findAllByUserId(@PathVariable("id") int id) {
        return orderService.findAllByUserId(id);
    }

    /**
     * Save {@link Order}
     */
    @PostMapping
    public Order save(@RequestBody Order order) {
        return orderService.save(order);
    }

    /**
     * Delete {@link Order} by id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        orderService.delete(id);
    }

}
