package com.spookify.backend.controllers;

import com.spookify.backend.domain.User;
import com.spookify.backend.payload.requests.LoginRequest;
import com.spookify.backend.payload.responses.JWTLoginSuccessResponse;
import com.spookify.backend.security.JwtTokenProvider;
import com.spookify.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static com.spookify.backend.security.SecurityConstants.TOKEN_PREFIX;


@RestController
@RequestMapping("api/users")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {

    //private final MapValidationErrorService mapValidationErrorService;
    private final UserService userService;
    //private final UserValidator userValidator;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result) {

//        ResponseEntity<?> errorMap = mapValidationErrorService.getValidationErrors(result);
//        if (errorMap != null)
//            return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + jwtTokenProvider.generateToken(authentication);

        JWTLoginSuccessResponse jwtResponse = new JWTLoginSuccessResponse(true, jwt);
        return new ResponseEntity<>(jwtResponse, HttpStatus.OK);

    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {

//        userValidator.validate(user, result);
//
//        ResponseEntity<?> errorMap = mapValidationErrorService.getValidationErrors(result);
//        if (errorMap != null)
//            return errorMap;

        User newUser = userService.saveUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
