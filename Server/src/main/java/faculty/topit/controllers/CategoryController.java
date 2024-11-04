package faculty.topit.controllers;

import faculty.topit.dtos.CategoryDto;
import faculty.topit.dtos.ProductDto;
import faculty.topit.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<CategoryDto>> getAllCategories(){
        try {
            return ResponseEntity.ok(categoryService.getAllCategories());

        } catch (Exception e) {
            return (ResponseEntity<List<CategoryDto>>) ResponseEntity.internalServerError();
        }
    }

    @PostMapping("/addCategory")
    public ResponseEntity addCategory(@RequestBody CategoryDto categoryDto) {
        categoryService.addCategory(categoryDto);
        return (ResponseEntity) ResponseEntity.ok();
    }
}
