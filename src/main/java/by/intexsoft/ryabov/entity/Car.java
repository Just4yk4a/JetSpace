package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

/**
 * Car entity
 */
@Entity
public class Car extends AbstractPersistable<Integer> {
    /**
     * Contains volume
     */
    @Column
    public int volume;

    /**
     * Contains weight
     */
    @Column
    public int weight;

    /**
     * Contains {@link Category}
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    public Category category;
}
