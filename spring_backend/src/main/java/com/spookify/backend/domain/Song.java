package com.spookify.backend.domain;

import com.spookify.backend.annotations.JacksonIdSerializer;
import lombok.Data;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@Cache(region = "songCache", usage = CacheConcurrencyStrategy.READ_WRITE)
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String link;

    @ManyToOne(fetch = FetchType.EAGER)
    private Artist artist;

    @ManyToOne(fetch = FetchType.EAGER)
    private Album album;

    @JacksonIdSerializer
    @Cache(region = "songCache", usage = CacheConcurrencyStrategy.READ_WRITE)
    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "SONG_GENRE",
            joinColumns = @JoinColumn(name = "SONG_ID"),
            inverseJoinColumns = @JoinColumn(name = "GENRE_ID"))
    private List<Genre> genres = new ArrayList<>();

    @JacksonIdSerializer
    @Cache(region = "songCache", usage = CacheConcurrencyStrategy.READ_WRITE)
    @ManyToMany(mappedBy = "likedSongs", fetch = FetchType.LAZY)
    private List<User> likedUsers = new ArrayList<>();

    @JacksonIdSerializer
    @Cache(region = "songCache", usage = CacheConcurrencyStrategy.READ_WRITE)
    @ManyToMany(mappedBy = "songs", fetch = FetchType.LAZY)
    private List<Playlist> playlists = new ArrayList<>();

    @JacksonIdSerializer
    @Cache(region = "songCache", usage = CacheConcurrencyStrategy.READ_WRITE)
    @OneToMany(mappedBy = "song", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
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
