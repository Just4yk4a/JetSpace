package by.intexsoft.ryabov.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.util.List;

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
    @JsonIgnore
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

    /**
     * Contains {@link Category} list
     */
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "driver_category",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "category_id")})
    public List<Category> categories;
}