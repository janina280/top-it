package faculty.topit.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity(name="Provider")
@Data
public class ProviderModel {
    @Id
    @Column(name="name", nullable = false)
    private String name;

}
