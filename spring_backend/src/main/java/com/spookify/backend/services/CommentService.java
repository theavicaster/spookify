package com.spookify.backend.services;

import com.spookify.backend.domain.Comment;
import com.spookify.backend.domain.Song;
import com.spookify.backend.domain.User;
import com.spookify.backend.exceptions.NotFoundException;
import com.spookify.backend.exceptions.UnauthorizedUserException;
import com.spookify.backend.repositories.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final SongService songService;
    private final UserService userService;

    public Comment findCommentById(Long id) {

        return commentRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Comment ID: %s does not exist", id)));
    }

    public Iterable<Comment> findCommentsBySongId(Long id) {

        Song song = songService.findSongById(id);
        return song.getComments();
    }

    public Comment saveComment(Long id, String content, User user) {

        user = userService.findUserById(user.getId());
        Song song = songService.findSongById(id);

        Comment comment = new Comment();
        comment.setContent(content);
        comment.setUser(user);
        comment.setSong(song);

        return commentRepository.save(comment);
    }

    public Comment updateComment(Long id, String content, User user) {

        user = userService.findUserById(user.getId());

        Comment comment = findCommentById(id);
        if (!comment.getUser().equals(user)) {
            throw new UnauthorizedUserException(String.format("User: %s cannot update this comment", user.getUsername()));
        }

        comment.setContent(content);
        return commentRepository.save(comment);
    }

    public void removeComment(Long id, User user) {

        user = userService.findUserById(user.getId());

        Comment comment = findCommentById(id);
        if (!comment.getUser().equals(user)) {
            throw new UnauthorizedUserException(String.format("User: %s cannot delete this comment", user.getUsername()));
        }

        commentRepository.delete(comment);
    }
}
