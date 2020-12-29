import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Box, IconButton } from '@material-ui/core';
import ReactPlayer from 'react-player/youtube';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Modal from '../ModalBackdrop/Modal';
import CommentForm from '../CommentForm/CommentForm';
import PlaylistSelectorModal from '../PlaylistSelectorModal/PlaylistSelectorModal';
import spookifyAPI from '../../../api/spookify';
import useStyles from './styles';

const SongModal = ({ openFlag, closeHandler, data, currentUser }) => {
  const classes = useStyles();

  const [commentsData, setCommentsData] = useState([]);
  const [likedUsers, setLikedUsers] = useState(data.likedUsers);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [commentId, setCommentId] = useState(false);
  const [playlistMode, setPlaylistMode] = useState('Add');
  const [playlistSelectorModalOpen, setPlaylistSelectorModalOpen] = useState(
    false
  );

  const handleClickPlaylistSelectorModalAdd = () => {
    setPlaylistMode('Add');
    setPlaylistSelectorModalOpen(true);
  };

  const handleClickPlaylistSelectorModalDelete = () => {
    setPlaylistMode('Delete');
    setPlaylistSelectorModalOpen(true);
  };

  const handleClosePlaylistSelectorModal = () => {
    setPlaylistSelectorModalOpen(false);
  };

  const handleToggleLike = () => {
    const toggleLike = async () => {
      const response = await spookifyAPI.put(`/likes/songs/${data.id}`);
      setLikedUsers(response.data.likedUsers);
    };
    toggleLike();
  };

  const handleDeleteClick = (commentId) => {
    const reloadComments = async () => {
      const commentsData = await spookifyAPI.get(`/comments/song/${data.id}`);
      setCommentsData(commentsData.data);
    };

    const deleteComment = async () => {
      await spookifyAPI.delete(`/comments/${commentId}`);
    };

    deleteComment();
    reloadComments();
  };

  const handleClickCommentModalCreate = () => {
    setCommentId(false);
    setCommentModalOpen(true);
  };

  const handleClickCommentModalUpdate = (commentId) => {
    setCommentId(commentId);
    setCommentModalOpen(true);
  };

  const handleCloseCommentModal = () => {
    const reloadComments = async () => {
      const commentsData = await spookifyAPI.get(`/comments/song/${data.id}`);
      setCommentsData(commentsData.data);
    };
    setCommentModalOpen(false);
    reloadComments();
  };

  useEffect(() => {
    const getComments = async () => {
      let commentsArr = [];
      for (const commentId of data.comments) {
        const commentData = await spookifyAPI.get(`/comments/${commentId}`);
        commentsArr.push(commentData.data);
      }
      setCommentsData(commentsArr);
    };

    getComments();
  }, [data.comments, likedUsers]);

  return (
    <Modal openFlag={openFlag} closeHandler={closeHandler}>
      <div
        style={{ height: 325, width: 500, display: 'block', margin: 'auto' }}
      >
        <ReactPlayer
          url={data.link}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
      <Typography className={classes.subheading}>Likes</Typography>
      <Box textAlign="center">
        {likedUsers.includes(parseInt(currentUser.id)) ? (
          <Typography className={classes.user}>You liked this song!</Typography>
        ) : (
          <Typography className={classes.user}>
            You have not liked this song
          </Typography>
        )}
        <Typography className={classes.user}>
          {likedUsers.length} {likedUsers.length === 1 ? 'Like' : 'Likes'}
        </Typography>
        <Button
          onClick={handleToggleLike}
          className={classes.button}
          style={{ margin: 10 }}
        >
          Toggle Like
        </Button>
      </Box>

      <Typography className={classes.subheading}>Comments</Typography>
      {commentsData &&
        commentsData.map((comment) => {
          return (
            <div>
              <Typography>
                <span className={classes.user}>{comment.user.username} -</span>{' '}
                {comment.content}
              </Typography>
              {comment.user.id === parseInt(currentUser.id) && (
                <Box textAlign="right">
                  <IconButton
                    onClick={() => {
                      handleClickCommentModalUpdate(comment.id);
                    }}
                  >
                    <EditIcon className={classes.icons} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDeleteClick(comment.id);
                    }}
                  >
                    <DeleteIcon className={classes.icons} />
                  </IconButton>
                </Box>
              )}
            </div>
          );
        })}
      <Box textAlign="center">
        <Button
          onClick={handleClickCommentModalCreate}
          className={classes.button}
          style={{ margin: 10 }}
        >
          Add Comment
        </Button>
      </Box>

      <Typography className={classes.subheading}>Playlists</Typography>
      <Box textAlign="center">
        <Button
          onClick={handleClickPlaylistSelectorModalAdd}
          className={classes.button}
          style={{ margin: 10 }}
        >
          Add to Playlist
        </Button>
        <Button
          onClick={handleClickPlaylistSelectorModalDelete}
          className={classes.button}
          style={{ margin: 10 }}
        >
          Delete from Playlist
        </Button>
      </Box>

      <CommentForm
        openFlag={commentModalOpen}
        closeHandler={handleCloseCommentModal}
        songId={data.id}
        commentId={commentId}
      ></CommentForm>

      <PlaylistSelectorModal
        openFlag={playlistSelectorModalOpen}
        closeHandler={handleClosePlaylistSelectorModal}
        songId={data.id}
        mode={playlistMode}
      ></PlaylistSelectorModal>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, null)(SongModal);
