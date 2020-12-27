import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import GenreCard from '../../components/Cards/GenreCard';
import spookifyAPI from '../../api/spookify';

const BrowsingPageGenres = () => {
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const { data } = await spookifyAPI.get('/genres');
      //TODO error handler
      setGenresData(data);
    };

    getGenres();
  }, []);

  return (
    <>
      <GridLayout>
        {genresData.map((data, index) => {
          return (
            <Grid key={data.id} item xs={12} lg={3}>
              <GenreCard
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

export default BrowsingPageGenres;
