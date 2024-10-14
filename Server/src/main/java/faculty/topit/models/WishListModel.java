package faculty.topit.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity(name="wishlists")
@Data
public class WishListModel {
    @Id
    @Column(name="id", nullable = false)
    private Long id;

    @ManyToMany(mappedBy = "wishLists")
    private Set<ProductModel> products;
}
