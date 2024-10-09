package faculty.topit.repositories;

import faculty.topit.models.CategoryModel;
import faculty.topit.models.DeliveryModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryRepository extends JpaRepository<DeliveryModel, String> {
}
