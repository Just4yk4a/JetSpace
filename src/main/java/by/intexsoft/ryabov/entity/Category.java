package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Category extends AbstractPersistable<Integer> {
    @Column(name="type")
    public String type;
}
