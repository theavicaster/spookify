import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Box } from '@material-ui/core';
import ReactPlayer from 'react-player/youtube';

import Modal from '../ModalBackdrop/Modal';
import spookifyAPI from '../../../api/spookify';
import useStyles from './styles';

const SongModal = ({ openFlag, closeHandler, data, currentUser }) => {
  const classes = useStyles();

  const [commentsData, setCommentsData] = useState([]);
  const [likedUsers, setLikedUsers] = useState(data.likedUsers);

  const handleAddComment = () => {
    console.log('thanks for clicking me bro');
  };

  const handleToggleLike = () => {
    const toggleLike = async () => {
      const response = await spookifyAPI.put(`/likes/songs/${data.id}`);
      setLikedUsers(response.data.likedUsers);
    };
    toggleLike();
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
      {commentsData.map((comment) => {
        return (
          <Typography>
            <span className={classes.user}>{comment.user.username} -</span>{' '}
            {comment.content}
          </Typography>
        );
      })}
      <Box textAlign="center">
        <Button
          onClick={handleAddComment}
          className={classes.button}
          style={{ margin: 10 }}
        >
          Add Comment
        </Button>
      </Box>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, null)(SongModal);
