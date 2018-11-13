package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

/**
 * Driver entity
 */
@Entity(name = "driver_category")
public class Driver extends AbstractPersistable<Integer> {
    /**
     * Contains {@link User}
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    public User user;

    /**
     * Contains {@link Category}
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    public Category category;
}
