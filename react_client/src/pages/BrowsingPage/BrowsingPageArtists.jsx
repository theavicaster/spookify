import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import ArtistCard from '../../components/Cards/ArtistCard';
import spookifyAPI from '../../api/spookify';

const BrowsingPageArtists = () => {
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
        {artistsData.map((data, index) => {
          return (
            <Grid key={data.id} item xs={12} lg={3}>
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
