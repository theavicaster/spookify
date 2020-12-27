import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
  Collapse,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const SongCard = ({ data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fontSize =
    data.name.length >= 18 ? '1.5em' : data.name.length >= 8 ? '2em' : '3em';

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography style={{ fontSize: fontSize }}>{data.name}</Typography>
          {fontSize === '2em' && <div style={{ height: '1.5em' }} />}
          {data.name === 'Breaking the Habit' && <div style={{ height: '2em' }} />}
        </CardContent>
        <CardMedia className={classes.media} image={data.album.album_art_url} />
      </CardActionArea>
      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="seconfary"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{data.artist.name}</Typography>
          <Typography paragraph>{data.album.name}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SongCard;
