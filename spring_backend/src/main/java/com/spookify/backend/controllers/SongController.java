package com.spookify.backend.controllers;

import com.spookify.backend.domain.Song;
import com.spookify.backend.services.SongService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/songs")
@CrossOrigin
@RequiredArgsConstructor
public class SongController {

    private final SongService songService;

    @GetMapping("")
    public Iterable<Song> getAllSongs() {

        return songService.findAllSongs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSongById(@PathVariable Long id) {

        Song song = songService.findSongById(id);
        return new ResponseEntity<>(song, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public Iterable<Song> getSongsByName(@PathVariable String name) {

        return songService.findSongsByName(name);
    }
}
