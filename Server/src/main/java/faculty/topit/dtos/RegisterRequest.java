package faculty.topit.dtos;

import lombok.Data;

@Data
public class RegisterRequest {
    private String Email;
    private String Password;
    private String FirstName;
    private String LastName;
    private String Address;
    private String PhoneNumber;
}
