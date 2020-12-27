import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import SongCard from '../../components/Cards/SongCard/SongCard';
import spookifyAPI from '../../api/spookify';

const BrowsingPageSongs = () => {
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const { data } = await spookifyAPI.get('/songs');
      //TODO error handler
      setSongsData(data);
    };

    getSongs();
  }, []);

  return (
    <>
      <GridLayout>
        {songsData.map((data) => {
          return (
            <Grid key={data.id} item xs={12} lg={3}>
              <SongCard data={data} />
            </Grid>
          );
        })}
      </GridLayout>
    </>
  );
};

export default BrowsingPageSongs;
