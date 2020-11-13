package com.spookify.backend.controllers;

import com.spookify.backend.domain.Comment;
import com.spookify.backend.services.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/comments")
@CrossOrigin
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getCommentById(@PathVariable Long id) {

        Comment comment = commentService.findCommentById(id);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @GetMapping("/song/{id}")
    public Iterable<Comment> getCommentsBySong(@PathVariable Long id) {

        return commentService.findCommentsBySongId(id);
    }
}
