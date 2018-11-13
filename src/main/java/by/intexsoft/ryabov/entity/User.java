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
    @Column(unique = true)
    public String username;

    /**
     * Contains user password
     */
    @Column
    public String password;

    /**
     * Contains user name
     */
    @Column
    public String name;

    /**
     * Contains user {@link Role}
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    public Role role;
}