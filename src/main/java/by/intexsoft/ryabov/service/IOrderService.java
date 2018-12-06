package by.intexsoft.ryabov.service;

import by.intexsoft.ryabov.entity.Order;

import java.util.Date;
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
     * Find all {@link Order}
     */
    List<Order> findAll();

    /**
     * Find all {@link Order}s by user id
     */
    List<Order> findAllByUserId(int id);

    /**
     * Delete by id
     */
    void delete(int id);
}
