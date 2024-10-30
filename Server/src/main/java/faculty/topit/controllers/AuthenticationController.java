package faculty.topit.controllers;

import faculty.topit.dtos.LoginRequest;
import faculty.topit.dtos.RegisterRequest;
import faculty.topit.dtos.AuthenticationResponse;
import faculty.topit.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {
    private final UserService userService;

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody LoginRequest request) {
        try {
            return ResponseEntity.ok(userService.authenticate(request));
        } catch (Exception e) {
            return (ResponseEntity<AuthenticationResponse>) ResponseEntity.internalServerError();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        try {
            return ResponseEntity.ok(userService.registerUser(request));
        } catch (Exception e) {
            return (ResponseEntity<AuthenticationResponse>) ResponseEntity.internalServerError();
        }
    }
}
