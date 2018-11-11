package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Order extends AbstractPersistable<Integer> {
    @Column(name = "phone_number")
    public String phone;

    @Column
    public Date date;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="driver_id")
    @Nullable
    public Driver driver;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="car_id")
    public Car car;
}
