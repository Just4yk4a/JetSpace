package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Order} entity
 */
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
