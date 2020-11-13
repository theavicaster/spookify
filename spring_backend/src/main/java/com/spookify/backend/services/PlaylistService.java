package com.spookify.backend.services;

import com.spookify.backend.domain.Playlist;
import com.spookify.backend.domain.Song;
import com.spookify.backend.domain.User;
import com.spookify.backend.exceptions.AlreadyExistsException;
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
    private final SongService songService;
    private final PlaylistRepository playlistRepository;

    public Playlist findPlaylistByIdAndUser(Long id, User user) {

        Playlist playlist = playlistRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Playlist ID: %s does not exist", id)));

        if (!playlist.getUser().getId().equals(user.getId())) {
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

    public Playlist savePlaylist(String name, User user) {

        user = userService.findUserById(user.getId());

        Playlist playlist = new Playlist();
        playlist.setName(name);
        playlist.setUser(user);

        user.addPlaylist(playlist);
        return playlistRepository.save(playlist);
    }

    public Playlist updatePlaylistById(String name, Long id, User user) {

        user = userService.findUserById(user.getId());

        Playlist playlist = findPlaylistByIdAndUser(id, user);
        playlist.setName(name);

        return playlistRepository.save(playlist);
    }

    // when deleting a playlist, all corresponding songs
    // are deleted in SONG_PLAYLIST only because of who
    // the owner in the many-to-many relationship is
    public void deletePlaylistById(Long id, User user) {

        user = userService.findUserById(user.getId());

        Playlist playlist = findPlaylistByIdAndUser(id, user);

        playlistRepository.delete(playlist);
    }

    public Playlist addSongById(Long playlistId, Long songId, User user) {

        user = userService.findUserById(user.getId());
        Playlist playlist = findPlaylistByIdAndUser(playlistId, user);

        Song song = songService.findSongById(songId);
        if (playlist.getSongs().contains(song)) {
            throw new AlreadyExistsException(String.format("Song: %s already exists in playlist: %s",
                    song.getName(), playlist.getName()));
        }
        playlist.addSong(song);

        return playlistRepository.save(playlist);
    }

    public Playlist removeSongById(Long playlistId, Long songId, User user) {

        user = userService.findUserById(user.getId());
        Playlist playlist = findPlaylistByIdAndUser(playlistId, user);

        Song song = songService.findSongById(songId);
        if (!playlist.getSongs().contains(song)) {
            throw new NotFoundException(String.format("Song: %s not found in playlist: %s",
                    song.getName(), playlist.getName()));
        }
        playlist.removeSong(song);

        return playlistRepository.save(playlist);
    }
}