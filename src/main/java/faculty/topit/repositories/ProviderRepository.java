package faculty.topit.repositories;

import faculty.topit.models.ProviderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepository extends JpaRepository<ProviderModel, String> {
}
