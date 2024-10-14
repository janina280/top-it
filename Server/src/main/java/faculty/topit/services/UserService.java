package faculty.topit.services;

import faculty.topit.dtos.RegisterRequest;
import faculty.topit.dtos.RegisterResponse;
import faculty.topit.models.UserModel;
import faculty.topit.repositories.RoleRepository;
import faculty.topit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public RegisterResponse RegisterUser(RegisterRequest user){

        var entity = new UserModel(user.getFirstName(), user.getLastName(), user.getPhoneNumber(), user.getEmail(), user.getPassword(), user.getAddress());
        userRepository.save()
    }
}
