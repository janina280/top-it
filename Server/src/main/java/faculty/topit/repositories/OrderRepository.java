package faculty.topit.repositories;

import faculty.topit.models.DeliveryModel;
import faculty.topit.models.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Long> {
    @Query(value="SELECT * FROM orders o WHERE o.user.username = ?1",
    nativeQuery=true)
    List<OrderModel> findOrdersByUsername(String username);

    @Query(value="SELECT * FROM orders o WHERE o.user.username = ?1 and o.status = 'InCart'",
            nativeQuery=true)
    OrderModel findCartByUsername(String username);
}
