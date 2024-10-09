package faculty.topit.repositories;

import faculty.topit.models.DeliveryModel;
import faculty.topit.models.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Long> {
}
