package by.intexsoft.ryabov.service;

import by.intexsoft.ryabov.entity.Order;

import java.util.List;

/**
 * Service for working with {@link Order}
 */
public interface IOrderService {

    /**
     * Add {@link Order} to DB
     */
    Order save(Order order);

    /**
     * Get all {@link Order}
     */
    List<Order> findAll();
}
