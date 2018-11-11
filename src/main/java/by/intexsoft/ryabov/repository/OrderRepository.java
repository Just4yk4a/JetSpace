package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
