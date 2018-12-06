package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

/**
 * Spring Data JPA repository for the {@link Order} entity
 */
public interface OrderRepository extends JpaRepository<Order, Integer> {
    /**
     * Find {@link Date}s bu car id
     */
    @Query(value = "SELECT date FROM public.order WHERE public.order.car_id = :id", nativeQuery = true)
    List<Date> findDateByCarId(@Param("id") int id);

    /**
     * Find {@link Order}s by driver id
     */
    @Query(value = "SELECT * FROM public.order o WHERE o.driver_id = :id", nativeQuery = true)
    List<Order> findByDriverId(@Param("id") int id);
}
