import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

import SessionFormContainer from '../session_form/session_form_container';

class SessionFormModal extends Component {

  constructor(props) {
    super(props);
    
    this.state = { modalOpen: false };
  }

  componentWillReceiveProps(nextProps) {
    const modalOpen = nextProps.isOpen;
    this.setState({ modalOpen });
  }

  onModalOpen = () => {
    this.setState({ modalOpen: true });
  }

  onModalClose = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    const { modalOpen } = this.state;
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={modalOpen}
        contentLabel="Login Modal"
        onRequestClose={this.onModalClose}
      >
        <SessionFormContainer
          open={modalOpen}
          close={this.onModalClose}
        />
        <button
          onClick={this.onModalClose}
          className="modal-close"
        >×</button>
      </Modal>
    );
  }
}

export default SessionFormModal;
