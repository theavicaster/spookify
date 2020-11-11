package com.spookify.backend.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Username should not be blank")
    @Size(min = 3, max = 15, message = "Username should be of 3 to 15 characters")
    @Column(unique = true)
    private String username;
    @NotBlank(message = "Full name should not be blank")
    private String fullName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // ensures in Jackson that this field
    @NotBlank(message = "Password should not be blank")    // is not sent in response POJO
    private String password;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Transient
    private String confirmPassword;

    @Column(updatable = false)
    private Date createdAt;
    private Date updatedAt;

    @ManyToMany
    @JoinTable(name = "LIKED",
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "SONG_ID"))
    private List<Song> likedSongs = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Playlist> playlists = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Comment> comments = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    public void addSong(Song song) {
        this.likedSongs.add(song);
    }

    public void removeSong(Song song) {
        this.likedSongs.remove(song);
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
