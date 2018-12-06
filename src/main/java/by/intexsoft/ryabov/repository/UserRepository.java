package by.intexsoft.ryabov.repository;

import by.intexsoft.ryabov.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

/**
 * Spring Data JPA repository for the {@link User} entity
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    /**
     * Find {@link User} by username
     */
    User findByUsername(String username);

    /**
     * Find free {@link User}s by date
     */
    @Query(value = "SELECT * FROM public.user us  " +
            "LEFT JOIN ( SELECT u.username, u.password, u.role_id, u.name, u.id FROM public.user u " +
            "JOIN public.order o ON u.id = o.driver_id " +
            "WHERE o.date = :date OR o.date IS NULL) users " +
            "ON users.id = us.id " +
            "WHERE users.username IS NULL AND us.role_id = 2 "
            , nativeQuery = true)
    List<User> getFreeUsersByDate(@Param("date") Date date);
}
