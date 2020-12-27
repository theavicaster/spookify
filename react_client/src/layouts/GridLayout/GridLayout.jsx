import React from 'react';
import { Grid } from '@material-ui/core';

const GridLayout = ({ children }) => {
  return (
    <Grid container justify="center" align="center">
      <Grid item sm={2} />

      <Grid
        container
        item
        xs={12}
        sm={8}
        spacing={4}
        style={{ paddingTop: '20px' }}
        justify="center"
        align="center"
      >
        {children}
      </Grid>

      <Grid item sm={2} />
    </Grid>
  );
};

export default GridLayout;
