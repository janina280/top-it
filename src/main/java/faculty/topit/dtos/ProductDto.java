package faculty.topit.dtos;

import faculty.topit.models.ProductModel;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class ProductDto {
    private Long id;

    private String name;

    private String specification;

    private String description;

    private int stock;

    private double price;

    public ProductDto(ProductModel model) {
        this.id = model.getId();
        this.name = model.getName();
        this.specification = model.getSpecification();
        this.description = model.getDescription();
        this.stock = model.getStock();
        this.price = model.getPrice();
    }
}
