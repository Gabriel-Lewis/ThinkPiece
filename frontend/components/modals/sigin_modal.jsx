import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

const signInModal = ({ isOpen, close }) => (
  <Modal
    className="modal"
    overlayClassName="overlay"
    isOpen={isOpen}
    contentLabel="Login Modal"
    onRequestClose={close}
  >
    <SessionFormContainer
      open={isOpen}
      close={close}
    />
    <button
      onClick={close}
      className="modal-close"
    >×</button>
  </Modal>
  );

export default signInModal;
