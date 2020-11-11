package com.spookify.backend.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Data
@Entity
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String album_art_url;

    @ManyToOne
    private Artist artist;

    @OneToMany(mappedBy = "album")
    private List<Song> songs = new ArrayList<>();

    public void addSong(Song song) {
        this.songs.add(song);
    }

    public void removeSong(Song song) {
        this.songs.remove(song);
    }


}