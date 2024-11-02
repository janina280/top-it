package faculty.topit.models;

import faculty.topit.enums.OrderStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity(name="cart_items")
public class CartItemModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false)
    private Long id;

    @Column(name="quantity", nullable = false)
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name="product_id")
    private ProductModel product;

    @ManyToOne
    @JoinColumn(name="order_id")
    private OrderModel order;

    public CartItemModel(int quantity, ProductModel product) {
    this.quantity = quantity;
    this.product = product;
    }
}
