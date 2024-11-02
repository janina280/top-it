package faculty.topit.dtos;

import faculty.topit.enums.OrderStatus;
import faculty.topit.models.CartItemModel;
import faculty.topit.models.OrderModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

    public OrderDto(OrderModel orderModel) {
        Status = orderModel.getStatus();
        this.totalPrice = orderModel.getCartItems().stream().map(x -> (x.getQuantity() * x.getProduct().getPrice())).reduce(0.0, Double::sum);
        this.productQuantity = orderModel.getCartItems().stream().map(CartItemModel::getQuantity).reduce(0, Integer::sum);
        this.paymentName = orderModel.getPayment().getName();
    }

    private Long id;

    private OrderStatus Status;

    private double totalPrice;

    private int productQuantity;

    private String paymentName;
}