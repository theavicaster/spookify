package com.spookify.backend.controllers;

import com.spookify.backend.domain.Artist;
import com.spookify.backend.services.ArtistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/artists")
@CrossOrigin
@RequiredArgsConstructor
public class ArtistController {

    private final ArtistService artistService;

    @GetMapping("")
    public Iterable<Artist> getAllArtists() {

        return artistService.findAllArtists();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getArtistById(@PathVariable Long id) {

        Artist artist = artistService.findArtistById(id);
        return new ResponseEntity<>(artist, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public Iterable<Artist> getArtistsByName(@PathVariable String name) {

        return artistService.findArtistsByName(name);
    }
}
