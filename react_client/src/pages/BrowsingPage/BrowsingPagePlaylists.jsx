import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import PlaylistCard from '../../components/Cards/PlaylistCard';
import spookifyAPI from '../../api/spookify';
import useStyles from './styles';

const BrowsingPagePlaylists = () => {
  const classes = useStyles();

  const [playlistsData, setPlaylistsData] = useState([]);

  useEffect(() => {
    const getPlaylists = async () => {
      const { data } = await spookifyAPI.get('/playlists');
      //TODO error handler
      setPlaylistsData(data);
    };

    getPlaylists();
  }, []);

  return (
    <>
      <GridLayout>
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
            No Created Playlists
          </Typography>
        )}
      </GridLayout>
    </>
  );
};

export default BrowsingPagePlaylists;
