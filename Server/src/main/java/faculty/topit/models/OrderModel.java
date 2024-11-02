package faculty.topit.models;

import faculty.topit.enums.OrderStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity(name="orders")
public class OrderModel {
    public OrderModel(OrderStatus status, UserModel user) {
        Status = status;
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false)
    private Long id;

    @Column(name="status", nullable = false)
    private OrderStatus Status;

    @OneToMany(mappedBy = "order")
    private Set<CartItemModel> cartItems;

    @ManyToOne
    @JoinColumn(name = "payment_id")
    private PaymentModel payment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserModel user;

    public OrderModel() {

    }
}
