package faculty.topit.controllers;

import faculty.topit.dtos.AuthenticationResponse;
import faculty.topit.dtos.LoginRequest;
import faculty.topit.dtos.RegisterRequest;
import faculty.topit.services.ProductService;
import faculty.topit.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @PostMapping("/all")//todo: create a response model
    public ResponseEntity<> getAllProducts(
    ) {
        return ResponseEntity.ok(productService.getAllProducts());
    }
}
