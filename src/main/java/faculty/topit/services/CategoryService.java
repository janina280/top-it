package faculty.topit.services;

import faculty.topit.dtos.CategoryDto;
import faculty.topit.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    @Autowired
    public CategoryService(CategoryRepository repository){

        categoryRepository=repository;
    }
    public List<CategoryDto> getAllCategories(){
        var categories= categoryRepository.findAll();
        return categories.stream().map(CategoryDto::new).collect(Collectors.toList());
    }

    public CategoryDto getCategoryByName(String name){
        var category= categoryRepository.getReferenceById(name);
        return new CategoryDto(category);
    }

    public void deleteCategory(String name) {
        categoryRepository.deleteById(name);
    }
}
