package faculty.topit.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity(name="WishList")
@Data
public class WishListModel {
    @Id
    @Column(name="id", nullable = false)
    private Long id;

}
