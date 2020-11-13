package com.spookify.backend.controllers;

import com.spookify.backend.domain.Playlist;
import com.spookify.backend.domain.User;
import com.spookify.backend.services.PlaylistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/playlists")
@CrossOrigin
@RequiredArgsConstructor
public class PlaylistController {

    private final PlaylistService playlistService;

    @GetMapping("")
    public Iterable<Playlist> getAllPlaylists(Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        return playlistService.findAllPlaylistsByUser(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPlaylistById(@PathVariable Long id, Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        Playlist playlist = playlistService.findPlaylistByIdAndUser(id, user);
        return new ResponseEntity<>(playlist, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public Iterable<Playlist> getPlaylistsByName(@PathVariable String name, Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        return playlistService.findPlaylistsByNameAndUser(name, user);
    }
}
