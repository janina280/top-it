package faculty.topit.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

import java.util.Set;

@Entity(name="permission")
@Data
public class PermissionModel {
    @Id
    @Column(name="name", nullable = false)
    private String name;

    @ManyToMany(mappedBy = "permissions")
    private Set<RoleModel> roles;
}
