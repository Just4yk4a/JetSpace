package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.Order;
import by.intexsoft.ryabov.repository.OrderRepository;
import by.intexsoft.ryabov.service.IOrderService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service for {@link Order} entity
 */
@Service
public class OrderService implements IOrderService {
    private final OrderRepository orderRepository;

    /**
     * Constructor
     */
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    /**
     * Save {@link Order} in DB
     */
    @Override
    public Order save(Order order) {
        return orderRepository.save(order);
    }

    /**
     * Find all {@link Order}s
     */
    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    /**
     * Find all {@link Order}s by user id
     */
    @Override
    public List<Order> findAllByUserId(int id) {
        return orderRepository.findByDriverId(id);
    }

    /**
     * Delete by id
     */
    @Override
    public void delete(int id) {
        orderRepository.deleteById(id);
    }
}
