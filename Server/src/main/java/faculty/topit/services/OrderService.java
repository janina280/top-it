package faculty.topit.services;

import faculty.topit.dtos.OrderDto;
import faculty.topit.dtos.ProductDto;
import faculty.topit.enums.OrderStatus;
import faculty.topit.models.CartItemModel;
import faculty.topit.models.OrderModel;
import faculty.topit.repositories.OrderRepository;
import faculty.topit.repositories.ProductRepository;
import faculty.topit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    private final ProductRepository productRepository;

    private final UserRepository userRepository;

    @Autowired
    public OrderService(OrderRepository repository, ProductRepository productRepository, UserRepository userRepository) {
        orderRepository = repository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    public List<ProductDto> getCartProductsByUser(String username) {
        var order = orderRepository.findCartByUsername(username);

        return order.getCartItems().stream().map(CartItemModel::getProduct).map(ProductDto::new).collect(Collectors.toList());
    }

    public List<OrderDto> getOrdersByUserNameId(String username) {
        var orders = orderRepository.findOrdersByUsername(username);

        return orders.stream().map(OrderDto::new).collect(Collectors.toList());
    }

    public void deleteProductFromCart(String username, Long productId) throws Exception {
        var order = orderRepository.findCartByUsername(username);

        if (order == null) {
            throw new Exception("Cart is not present!");
        }

        var cartItems = order.getCartItems();

        var cartItem = cartItems.stream().filter(x -> x.getProduct().getId() == productId).findFirst().orElseThrow();
        if(cartItem.getQuantity() == 1)
        {
            cartItems.remove(cartItem);
        }
        else{
            cartItem.setQuantity(cartItem.getQuantity() - 1);
        }

        order.setCartItems(cartItems);
    }

    public void addProductInCart(String username, long productId) {
        var order = orderRepository.findCartByUsername(username);

        if (order == null) {
            order = new OrderModel(OrderStatus.InCart, userRepository.findByUsername(username).orElseThrow());
        }
        var cartItems = order.getCartItems();

        var cartItem = cartItems.stream().filter(x -> x.getProduct().getId() == productId).findFirst().orElse(null);

        if (cartItem == null) {
            cartItem = new CartItemModel(1, productRepository.findById(productId).orElseThrow());
        }

        cartItems.add(cartItem);
        order.setCartItems(cartItems);

        orderRepository.save(order);
    }
}
