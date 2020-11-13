package com.spookify.backend.services;

import com.spookify.backend.domain.User;
import com.spookify.backend.exceptions.AlreadyExistsException;
import com.spookify.backend.exceptions.NotFoundException;
import com.spookify.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = findUserByUsername(username);
        if (user == null)
            throw new UsernameNotFoundException(String.format("User: %s does not exist", username));
        return user;
    }

    public User findUserByUsername(String username) {

        return userRepository.findByUsername(username);
    }

    public User findUserById(Long id) {

        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("User ID: %s does not exist", id)));
    }

    public User saveUser(User user) {

        try {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            return userRepository.save(user);
        } catch (Exception e) {
            throw new AlreadyExistsException(String.format("Username: %s already exists", user.getUsername()));
        }
    }
}
