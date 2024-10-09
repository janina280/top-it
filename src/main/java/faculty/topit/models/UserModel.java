package faculty.topit.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "user")
@Data
public class UserModel {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "phoneNumber", nullable = false)
    private String phoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "address", nullable = false)
    private String address;

    @ManyToOne
    @JoinColumn(name="role_name")
    private RoleModel role;
}
