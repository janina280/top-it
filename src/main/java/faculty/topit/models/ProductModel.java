package faculty.topit.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="Product")
@Data
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="specification", nullable = false)
    private String specification;

    @Column(name="description", nullable = false)
    private String description;

    @Column(name="stock", nullable = false)
    private int stock;

    @Column(name="price", nullable = false)
    private double price;
}
