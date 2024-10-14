package faculty.topit.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity(name = "products")
@Data
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "specification", nullable = false)
    private String specification;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "stock", nullable = false)
    private int stock;

    @Column(name = "price", nullable = false)
    private double price;

    @ManyToOne
    @JoinColumn(name = "provider_id")
    private ProviderModel provider;

    @ManyToOne
    @JoinColumn(name = "category_name")
    private CategoryModel category;

    @OneToMany(mappedBy = "product")
    private Set<CartItemModel> cartItems;

    @ManyToMany
    @JoinTable(name = "product_withlist",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "wishList_id"))
    private Set<WishListModel> wishLists;
}
