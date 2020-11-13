package com.spookify.backend.repositories;

import com.spookify.backend.domain.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {

    Iterable<Song> findByNameContainingIgnoreCase(String name);
}
