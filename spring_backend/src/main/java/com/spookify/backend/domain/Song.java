package com.spookify.backend.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Data
@Entity
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String link;

    @ManyToOne
    private Artist artist;

    @ManyToOne
    private Album album;

    @ManyToMany
    @JoinTable(name = "SONG_GENRE",
            joinColumns = @JoinColumn(name = "SONG_ID"),
            inverseJoinColumns = @JoinColumn(name = "GENRE_ID"))
    private List<Genre> genres = new ArrayList<>();

    @ManyToMany(mappedBy = "likedSongs")
    private List<User> likedUsers = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "SONG_PLAYLIST",
            joinColumns = @JoinColumn(name = "SONG_ID"),
            inverseJoinColumns = @JoinColumn(name = "PLAYLIST_ID"))
    private List<Playlist> playlists = new ArrayList<>();

    @OneToMany(mappedBy = "song")
    private List<Comment> comments = new ArrayList<>();

    public void addGenre(Genre genre) {
        this.genres.add(genre);
    }

    public void removeGenre(Genre genre) {
        this.genres.remove(genre);
    }

    public void addUser(User user) {
        this.likedUsers.add(user);
    }

    public void removeUser(User user) {
        this.likedUsers.remove(user);
    }

    public void addPlaylist(Playlist playlist) {
        this.playlists.add(playlist);
    }

    public void removePlaylist(Playlist playlist) {
        this.playlists.remove(playlist);
    }

    public void addComment(Comment comment) {
        this.comments.add(comment);
    }

    public void removeComment(Comment comment) {
        this.comments.remove(comment);
    }

}
