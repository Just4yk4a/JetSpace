package by.intexsoft.ryabov.entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

/**
 * User entity
 */
@Entity
public class User extends AbstractPersistable<Integer> {

    /**
     * Contains user name
     */
    @Column(unique=true)
    public String username;

    /**
     * Contains user password
     */
    @Column
    public String password;

    @Column
    public String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="role_id")
    public Role role;
}