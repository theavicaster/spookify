package com.spookify.backend.controllers;

import com.spookify.backend.domain.Genre;
import com.spookify.backend.services.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/genres")
@CrossOrigin
@RequiredArgsConstructor
public class GenreController {

    private final GenreService genreService;

    @GetMapping("")
    public Iterable<Genre> getAllGenres() {

        return genreService.findAllGenres();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getGenreById(@PathVariable Long id) {

        Genre genre = genreService.findGenreById(id);
        return new ResponseEntity<>(genre, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public Iterable<Genre> getGenresByName(@PathVariable String name) {

        return genreService.findGenresByName(name);
    }
}
