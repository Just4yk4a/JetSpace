package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Role entity
 */
@Entity
public class Role extends AbstractPersistable<Integer> {
    /**
     * Contain type of role
     */
    @Column(name = "role")
    public String type;
}
