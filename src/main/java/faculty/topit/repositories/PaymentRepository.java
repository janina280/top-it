package faculty.topit.repositories;

import faculty.topit.models.DeliveryModel;
import faculty.topit.models.PaymentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentModel, String> {
}
