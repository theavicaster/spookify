package com.spookify.backend.controllers;

import com.spookify.backend.domain.Comment;
import com.spookify.backend.domain.User;
import com.spookify.backend.payload.requests.CommentContentRequest;
import com.spookify.backend.services.CommentService;
import com.spookify.backend.services.ValidationErrorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("api/comments")
@CrossOrigin
@RequiredArgsConstructor
public class CommentController {

    private final ValidationErrorService validationErrorService;
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

    @PostMapping("/song/{id}")
    public ResponseEntity<?> createCommentOnSong(@PathVariable Long id, @Valid @RequestBody CommentContentRequest commentContentRequest,
                                                 BindingResult result, Authentication authentication) {

        ResponseEntity<?> errorMap = validationErrorService.getValidationErrors(result);
        if (errorMap != null)
            return errorMap;

        User user = (User) authentication.getPrincipal();
        Comment comment = commentService.saveComment(id, commentContentRequest.getContent(), user);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateCommentById(@PathVariable Long id, @Valid @RequestBody CommentContentRequest commentContentRequest,
                                               BindingResult result, Authentication authentication) {

        ResponseEntity<?> errorMap = validationErrorService.getValidationErrors(result);
        if (errorMap != null)
            return errorMap;

        User user = (User) authentication.getPrincipal();
        Comment comment = commentService.updateComment(id, commentContentRequest.getContent(), user);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCommentById(@PathVariable Long id, Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        commentService.removeComment(id, user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
