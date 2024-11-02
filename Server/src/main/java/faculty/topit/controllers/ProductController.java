package faculty.topit.controllers;

import faculty.topit.dtos.AuthenticationResponse;
import faculty.topit.dtos.LoginRequest;
import faculty.topit.dtos.ProductDto;
import faculty.topit.dtos.RegisterRequest;
import faculty.topit.services.ProductService;
import faculty.topit.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/all")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        try {
            return ResponseEntity.ok(productService.getAllProducts());

        } catch (Exception e) {
            return (ResponseEntity<List<ProductDto>>) ResponseEntity.internalServerError();
        }
    }
}
