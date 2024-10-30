package faculty.topit.controllers;

import faculty.topit.dtos.ProductDto;
import faculty.topit.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class CartController {
    private final OrderService cartService;

    @GetMapping("/")
    public ResponseEntity<List<ProductDto>> getCartsForUser() {
        try {
            return ResponseEntity.ok(cartService.getAllProducts());

        } catch (Exception e) {
            return (ResponseEntity<List<ProductDto>>) ResponseEntity.internalServerError();
        }
    }

    @PostMapping("/")
    public ResponseEntity<List<ProductDto>> getCartsForUser() {
        try {
            return ResponseEntity.ok(cartService.getAllProducts());

        } catch (Exception e) {
            return (ResponseEntity<List<ProductDto>>) ResponseEntity.internalServerError();
        }
    }
}
