package com.spookify.backend.domain;

import com.spookify.backend.annotations.JacksonIdSerializer;
import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Cache;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Cache(region = "genreCache", usage = CacheConcurrencyStrategy.READ_WRITE)
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String photo_url;

    @JacksonIdSerializer
    @Cache(region = "genreCache", usage = CacheConcurrencyStrategy.READ_WRITE)
    @ManyToMany(mappedBy = "genres", fetch = FetchType.LAZY)
    private List<Song> songs = new ArrayList<>();

    public void addSong(Song song) {
        this.songs.add(song);
    }

    public void removeSong(Song song) {
        this.songs.remove(song);
    }
}