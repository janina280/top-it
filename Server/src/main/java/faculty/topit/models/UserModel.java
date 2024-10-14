package faculty.topit.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "users")
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

    public UserModel(String firstName, String lastName, String phoneNumber, String email, String password, String address, RoleModel role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.address = address;
        this.role = role;
    }
}
