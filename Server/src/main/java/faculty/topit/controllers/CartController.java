package faculty.topit.controllers;

import faculty.topit.dtos.OrderDto;
import faculty.topit.dtos.ProductDto;
import faculty.topit.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class CartController {
    private final OrderService cartService;

    @GetMapping("/orders")
    public ResponseEntity<List<OrderDto>> getOrdersForUser() {
        try {
            var username = SecurityContextHolder.getContext().getAuthentication().getName();
            return ResponseEntity.ok(cartService.getOrdersByUserNameId(username));

        } catch (Exception e) {
            return (ResponseEntity<List<OrderDto>>) ResponseEntity.internalServerError();
        }
    }

    @GetMapping("/cart")
    public ResponseEntity<List<ProductDto>> getCartForUser() {
        try {
            var username = SecurityContextHolder.getContext().getAuthentication().getName();
            return ResponseEntity.ok(cartService.getCartProductsByUser(username));

        } catch (Exception e) {
            return (ResponseEntity<List<ProductDto>>) ResponseEntity.internalServerError();
        }
    }

    @PostMapping("/cart")
    public ResponseEntity addProductInCartForUser(long productId) {
        try {
            var username = SecurityContextHolder.getContext().getAuthentication().getName();
            cartService.addProductInCart(username, productId);
            return (ResponseEntity) ResponseEntity.ok();

        } catch (Exception e) {
            return (ResponseEntity) ResponseEntity.internalServerError();
        }
    }


    @DeleteMapping("/cart")
    public ResponseEntity removeProductFromCartForUser(long productId) {
        try {
            var username = SecurityContextHolder.getContext().getAuthentication().getName();
            cartService.deleteProductFromCart(username, productId);
            return (ResponseEntity) ResponseEntity.ok();

        } catch (Exception e) {
            return (ResponseEntity) ResponseEntity.internalServerError();
        }
    }
}
