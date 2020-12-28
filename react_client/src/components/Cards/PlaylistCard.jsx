import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const PlaylistCard = ({ data, backgroundColor }) => {
  const classes = useStyles();

  const fontSize =
    data.name.length >= 18 ? '1.5em' : data.name.length >= 8 ? '2em' : '3em';

  return (
    <Card className={classes.root} style={{ backgroundColor: backgroundColor }}>
      <Link className={classes.link} to={`/browse/playlists/${data.id}`}>
        <CardActionArea>
          <CardContent>
            <Typography
              style={{ fontSize: fontSize }}
              className={classes.heading}
            >
              {data.name}
            </Typography>
            {fontSize === '2em' && <div style={{ height: '1.5em' }} />}
            {data.name === 'Breaking the Habit' && (
              <div style={{ height: '2em' }} />
            )}
          </CardContent>
          <CardMedia
            className={classes.media}
            image="https://www.flaticon.com/svg/static/icons/svg/26/26297.svg"
          />
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PlaylistCard;
