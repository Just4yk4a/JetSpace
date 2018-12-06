package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

/**
 * Category entity
 */
@Entity
public class Category extends AbstractPersistable<Integer> {
    /**
     * Contains type of category
     */
    @Column(name = "type")
    public String type;
}
