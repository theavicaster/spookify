import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import ArtistCard from '../../components/Cards/ArtistCard';
import spookifyAPI from '../../api/spookify';
import useStyles from './styles';

const BrowsingPageArtists = () => {
  const classes = useStyles();

  const [artistsData, setArtistsData] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const { data } = await spookifyAPI.get('/artists');
      //TODO error handler
      setArtistsData(data);
    };

    getArtists();
  }, []);

  return (
    <>
      <GridLayout>
        <Grid item xs={12}>
          <Typography className={classes.heading}>Artists</Typography>
        </Grid>
        {artistsData.map((data, index) => {
          return (
            <Grid key={data.id} item xs={12} md={6} lg={4}>
              <ArtistCard
                data={data}
                backgroundColor={index % 2 === 1 ? '#ff5050' : '#8D99AE'}
              />
            </Grid>
          );
        })}
      </GridLayout>
    </>
  );
};

export default BrowsingPageArtists;
