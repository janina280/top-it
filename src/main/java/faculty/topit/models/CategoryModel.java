package faculty.topit.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name="Category")
public class CategoryModel {
    @Id
    @Column(name="name", nullable = false)
    private String name;
}
