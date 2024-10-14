package faculty.topit.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.Set;

@Entity(name="providers")
@Data
public class ProviderModel {
    @Id
    @Column(name="name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "provider")
    private Set<ProductModel> products;
}
