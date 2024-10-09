package faculty.topit.repositories;

import faculty.topit.models.WishListModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WishListRepository extends JpaRepository<WishListModel, Long> {
}
