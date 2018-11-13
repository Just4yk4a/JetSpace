package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.util.Date;

/**
 * Order entity
 */
@Entity
public class Order extends AbstractPersistable<Integer> {
    /**
     * Contains phone number
     */
    @Column(name = "phone_number")
    public String phone;

    /**
     * Contains date order
     */
    @Column
    public Date date;

    /**
     * Contains {@link Driver} for order
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "driver_id")
    public User driver;

    /**
     * Contains {@link Car} for order
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "car_id")
    public Car car;
}
