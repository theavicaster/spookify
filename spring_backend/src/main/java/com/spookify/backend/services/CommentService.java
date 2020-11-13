package com.spookify.backend.services;

import com.spookify.backend.domain.Comment;
import com.spookify.backend.domain.Song;
import com.spookify.backend.exceptions.NotFoundException;
import com.spookify.backend.repositories.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final SongService songService;

    public Comment findCommentById(Long id) {

        return commentRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Comment ID: %s does not exist", id)));
    }

    public Iterable<Comment> findCommentsBySongId(Long id) {

        Song song = songService.findSongById(id);
        return song.getComments();
    }
}
