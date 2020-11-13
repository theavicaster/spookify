package com.spookify.backend.services;

import com.spookify.backend.domain.Playlist;
import com.spookify.backend.domain.User;
import com.spookify.backend.exceptions.NotFoundException;
import com.spookify.backend.exceptions.UnauthorizedUserException;
import com.spookify.backend.repositories.PlaylistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaylistService {

    private final UserService userService;
    private final PlaylistRepository playlistRepository;

    public Playlist findPlaylistByIdAndUser(Long id, User user) {

        Playlist playlist = playlistRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Playlist ID: %s does not exist", id)));

        if (playlist.getUser().getId() != user.getId()) {
            throw new UnauthorizedUserException(String.format("User: %s is not authorized to access playlist ID: %s",
                    user.getUsername(), id));
        }

        return playlist;
    }

    public Iterable<Playlist> findAllPlaylistsByUser(User user) {

        // the User object sent from controller does not have
        // children because of lazy fetching
        user = userService.findUserById(user.getId());
        return user.getPlaylists();
    }

    @Transactional
    public Iterable<Playlist> findPlaylistsByNameAndUser(String name, User user) {

        user = userService.findUserById(user.getId());

        Predicate<Playlist> byContainsName = playlist -> playlist.getName().toLowerCase()
                .contains(name.toLowerCase());

        return user.getPlaylists()
                .stream()
                .filter(byContainsName)
                .collect(Collectors.toList());
    }
}
