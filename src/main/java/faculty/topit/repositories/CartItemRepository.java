package faculty.topit.repositories;

import faculty.topit.models.CartItemModel;
import faculty.topit.models.DeliveryModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItemModel, Long> {
}
