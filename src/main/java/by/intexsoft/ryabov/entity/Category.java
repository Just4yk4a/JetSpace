package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Category entity
 */
@Entity
public class Category extends AbstractPersistable<Integer> {
    /**
     * Contains type of {@link Category}
     */
    @Column(name = "type")
    public String type;
}
