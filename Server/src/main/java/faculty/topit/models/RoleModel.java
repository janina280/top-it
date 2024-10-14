package faculty.topit.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity(name = "roles")
@Data
public class RoleModel {
    @Id
    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "role")
    private Set<UserModel> users;

    @ManyToMany
    @JoinTable(name="role_permission",
    joinColumns = @JoinColumn(name="role_name"),
    inverseJoinColumns = @JoinColumn(name="permission_name"))
    private Set<PermissionModel> permissions;
}

