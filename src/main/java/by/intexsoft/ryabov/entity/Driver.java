package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

@Entity(name="driver_category")
public class Driver extends AbstractPersistable<Integer> {

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id")
    public User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="category_id")
    public Category category;
}
