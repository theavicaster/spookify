import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import SongCard from '../../components/Cards/SongCard';
import AlbumCard from '../../components/Cards/AlbumCard';
import ArtistCard from '../../components/Cards/ArtistCard';
import GenreCard from '../../components/Cards/GenreCard';
import PlaylistCard from '../../components/Cards/PlaylistCard';
import spookifyAPI from '../../api/spookify';
import useStyles from './styles';

const BrowsingPageSearch = ({ searchTerm }) => {
  const classes = useStyles();

  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [artistsData, setArtistsData] = useState([]);
  const [genresData, setGenresData] = useState([]);
  const [playlistsData, setPlaylistsData] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const { data } = await spookifyAPI.get(`/songs/name/${searchTerm}`);
      //TODO error handler
      setSongsData(data);
    };

    const getAlbums = async () => {
      const { data } = await spookifyAPI.get(`/albums/name/${searchTerm}`);
      //TODO error handler
      setAlbumsData(data);
    };

    const getArtists = async () => {
      const { data } = await spookifyAPI.get(`/artists/name/${searchTerm}`);
      //TODO error handler
      setArtistsData(data);
    };

    const getGenres = async () => {
      const { data } = await spookifyAPI.get(`/genres/name/${searchTerm}`);
      //TODO error handler
      setGenresData(data);
    };

    const getPlaylists = async () => {
      const { data } = await spookifyAPI.get(`/playlists/name/${searchTerm}`);
      //TODO error handler
      setPlaylistsData(data);
    };

    getSongs();
    getAlbums();
    getArtists();
    getGenres();
    getPlaylists();
  }, [searchTerm]);

  return (
    <>
      <GridLayout>
        <Grid item xs={12}>
          <Typography className={classes.heading}>Songs</Typography>
        </Grid>
        {songsData.length > 0 ? (
          songsData.map((data, index) => {
            return (
              <Grid key={data.id} item xs={12} md={6} lg={4}>
                <SongCard
                  data={data}
                  backgroundColor={index % 2 === 1 ? '#ff5050' : '#8D99AE'}
                />
              </Grid>
            );
          })
        ) : (
          <Typography color="primary" variant="h6">
            None Found
          </Typography>
        )}

        <Grid item xs={12}>
          <Typography className={classes.heading}>Albums</Typography>
        </Grid>
        {albumsData.length > 0 ? (
          albumsData.map((data, index) => {
            return (
              <Grid key={data.id} item xs={12} md={6} lg={4}>
                <AlbumCard
                  data={data}
                  backgroundColor={index % 2 === 1 ? '#ff5050' : '#8D99AE'}
                />
              </Grid>
            );
          })
        ) : (
          <Typography color="primary" variant="h6">
            None Found
          </Typography>
        )}

        <Grid item xs={12}>
          <Typography className={classes.heading}>Artists</Typography>
        </Grid>
        {artistsData.length > 0 ? (
          artistsData.map((data, index) => {
            return (
              <Grid key={data.id} item xs={12} md={6} lg={4}>
                <ArtistCard
                  data={data}
                  backgroundColor={index % 2 === 1 ? '#ff5050' : '#8D99AE'}
                />
              </Grid>
            );
          })
        ) : (
          <Typography color="primary" variant="h6">
            None Found
          </Typography>
        )}

        <Grid item xs={12}>
          <Typography className={classes.heading}>Genres</Typography>
        </Grid>
        {genresData.length > 0 ? (
          genresData.map((data, index) => {
            return (
              <Grid key={data.id} item xs={12} md={6} lg={4}>
                <GenreCard
                  data={data}
                  backgroundColor={index % 2 === 1 ? '#ff5050' : '#8D99AE'}
                />
              </Grid>
            );
          })
        ) : (
          <Typography color="primary" variant="h6">
            None Found
          </Typography>
        )}

        <Grid item xs={12}>
          <Typography className={classes.heading}>Playlists</Typography>
        </Grid>
        {playlistsData.length > 0 ? (
          playlistsData.map((data, index) => {
            return (
              <Grid key={data.id} item xs={12} md={6} lg={4}>
                <PlaylistCard
                  data={data}
                  backgroundColor={index % 2 === 1 ? '#ff5050' : '#8D99AE'}
                />
              </Grid>
            );
          })
        ) : (
          <Typography color="primary" variant="h6">
            None Found
          </Typography>
        )}
      </GridLayout>
    </>
  );
};

export default BrowsingPageSearch;
