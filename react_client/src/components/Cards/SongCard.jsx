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
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SongModal from '../Modals/SongModal/SongModal';
import useStyles from './styles';

const SongCard = ({ data, backgroundColor }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [songModalOpen, setSongModalOpen] = useState(false);

  const handleClickSongModal = () => {
    setSongModalOpen(true);
  };
  const handleCloseSongModal = () => {
    setSongModalOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fontSize =
    data.name.length >= 18 ? '1.5em' : data.name.length >= 8 ? '2em' : '3em';

  return (
    <>
      <Card
        className={classes.root}
        style={{ backgroundColor: backgroundColor }}
      >
        <CardActionArea onClick={handleClickSongModal}>
          <CardContent>
            <Typography
              style={{ fontSize: fontSize }}
              className={classes.heading}
            >
              {data.name}
            </Typography>
            {fontSize === '2em' && <div style={{ height: '1.5em' }} />}
            {(data.name === 'Breaking the Habit' ||
              data.name === 'When We Were Young') && (
              <div style={{ height: '2em' }} />
            )}
          </CardContent>
          <CardMedia
            className={classes.media}
            image={
              backgroundColor === '#8D99AE'
                ? data.album.album_art_url
                : data.artist.photo_url
            }
          />
        </CardActionArea>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Link
              className={classes.link}
              to={`/browse/artists/${data.artist.id}`}
            >
              <Typography className={classes.subheading} paragraph>
                {data.artist.name}
              </Typography>
            </Link>
            <Link
              className={classes.link}
              to={`/browse/albums/${data.album.id}`}
            >
              <Typography className={classes.subheading} paragraph>
                {data.album.name}
              </Typography>
            </Link>
          </CardContent>
        </Collapse>
      </Card>

      <SongModal
        openFlag={songModalOpen}
        closeHandler={handleCloseSongModal}
        data={data}
      ></SongModal>
    </>
  );
};

export default SongCard;
