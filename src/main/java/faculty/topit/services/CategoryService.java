package faculty.topit.services;

import faculty.topit.dtos.CategoryDto;
import faculty.topit.models.CategoryModel;
import faculty.topit.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private CategoryRepository categoryRepository;
    @Autowired
    public CategoryService(CategoryRepository repository){
        categoryRepository=repository;
    }
    public List<CategoryDto> getAllCategories(){
        var categories= categoryRepository.findAll();
        
    }
}
