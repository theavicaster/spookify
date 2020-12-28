import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import GenreCard from '../../components/Cards/GenreCard';
import spookifyAPI from '../../api/spookify';
import useStyles from './styles';

const BrowsingPageGenres = () => {
  const classes = useStyles();

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
        <Grid item xs={12}>
          <Typography className={classes.heading}>Genres</Typography>
        </Grid>
        {genresData.map((data, index) => {
          return (
            <Grid key={data.id} item xs={12} md={6} lg={4}>
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
