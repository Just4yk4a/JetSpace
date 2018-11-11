package by.intexsoft.ryabov.service.impl;

import by.intexsoft.ryabov.entity.Order;
import by.intexsoft.ryabov.repository.OrderRepository;
import by.intexsoft.ryabov.service.IOrderService;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Order save(Order order) {
        return orderRepository.save(order);
    }
}
