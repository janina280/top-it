package faculty.topit.dtos;

import faculty.topit.models.CategoryModel;
import lombok.Data;

@Data
public class CategoryDto {
    private String name;

    public CategoryDto(CategoryModel model) {
        this.name = model.getName();
    }
}
