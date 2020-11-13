package com.spookify.backend.services;

import com.spookify.backend.domain.Song;
import com.spookify.backend.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LikeService {

    private final UserService userService;
    private final SongService songService;

    public Iterable<Song> findAllLikedSongsByUser(User user) {

        user = userService.findUserById(user.getId());
        return user.getLikedSongs();
    }

    public Song toggleLikedSong(Long id, User user) {

        user = userService.findUserById(user.getId());
        Song song = songService.findSongById(id);

        if (user.getLikedSongs().contains(song)) {
            user.removeSong(song);
        } else {
            user.addSong(song);
        }

        userService.saveUser(user);
        return song;
    }
}
