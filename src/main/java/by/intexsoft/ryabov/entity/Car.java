package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

@Entity
public class Car extends AbstractPersistable<Integer> {
    @Column
    public int volume;

    @Column
    public int weight;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="category_id")
    public Category category;
}
