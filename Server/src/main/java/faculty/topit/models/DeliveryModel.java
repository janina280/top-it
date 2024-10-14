package faculty.topit.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name="deliveries")
public class DeliveryModel {
    @Id
    @Column(name="name", nullable = false)
    private String name;
}
