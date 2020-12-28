import React from 'react';
import ReactPlayer from 'react-player/youtube';

import Modal from '../ModalBackdrop/Modal';

const SongModal = ({ openFlag, closeHandler, data }) => {
  return (
    <Modal openFlag={openFlag} closeHandler={closeHandler}>
      <div style={{ height: 325, width: 500 }}>
        <ReactPlayer
          url={data.link}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </Modal>
  );
};

export default SongModal;
