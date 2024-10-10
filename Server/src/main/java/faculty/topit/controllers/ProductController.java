
package faculty.topit.controllers;

import faculty.topit.models.CategoryModel;
import faculty.topit.models.ProductModel;
import faculty.topit.repositories.CategoryRepository;
import faculty.topit.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/test")
    public void test(){
        CategoryModel category = new CategoryModel();

        category.setName("test");

        categoryRepository.save(category);
    }
}
