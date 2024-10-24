package faculty.topit.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.Set;

@Data
@Entity(name="categories")
public class CategoryModel {
    @Id
    @Column(name="name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "category")
    private Set<ProductModel> products;
}
