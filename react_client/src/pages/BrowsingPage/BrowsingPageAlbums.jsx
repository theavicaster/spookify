import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import AlbumCard from '../../components/Cards/AlbumCard';
import spookifyAPI from '../../api/spookify';

const BrowsingPageAlbums = () => {
  const [albumsData, setAlbumsData] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const { data } = await spookifyAPI.get('/albums');
      //TODO error handler
      setAlbumsData(data);
    };

    getAlbums();
  }, []);

  return (
    <>
      <GridLayout>
        {albumsData.map((data, index) => {
          return (
            <Grid key={data.id} item xs={12} lg={3}>
              <AlbumCard
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

export default BrowsingPageAlbums;
