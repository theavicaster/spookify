import React, { useState, useEffect } from 'react';
import { Button, Box } from '@material-ui/core';

import Modal from '../ModalBackdrop/Modal';
import spookifyAPI from '../../../api/spookify';
import useStyles from './styles';

const PlaylistSelectorModal = ({ openFlag, closeHandler, songId, mode }) => {
  const classes = useStyles();

  const [playlistsData, setPlaylistsData] = useState([]);

  useEffect(() => {
    const getPlaylists = async () => {
      const { data } = await spookifyAPI.get('/playlists');
      //TODO error handler
      setPlaylistsData(data);
    };

    getPlaylists();
  }, []);

  const handleClickAddPlaylist = (playlistId) => {
    const addToPlaylist = async () => {
      if (mode === 'Add') {
        await spookifyAPI.patch(`/playlists/${playlistId}/song/${songId}`);
      } else {
        await spookifyAPI.delete(`/playlists/${playlistId}/song/${songId}`);
      }
    };
    addToPlaylist();
    closeHandler();
  };

  return (
    <>
      <Modal openFlag={openFlag} closeHandler={closeHandler}>
        {playlistsData.map((playlist) => {
          return (
            <Box textAlign="center">
              <Button
                onClick={() => {
                  handleClickAddPlaylist(playlist.id);
                }}
                className={classes.button}
                style={{ margin: 10 }}
              >
                {mode ==='Add' ? 'Add to ' : 'Delete from '}
                {playlist.name}
              </Button>
            </Box>
          );
        })}
      </Modal>
    </>
  );
};

export default PlaylistSelectorModal;
