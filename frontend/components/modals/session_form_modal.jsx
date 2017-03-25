import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

import SessionFormContainer from '../session_form/session_form_container';

class SessionFormModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modalOpen: nextProps.isOpen,
    });
  }

  onModalOpen = () => {
    this.setState({ modalOpen: true });
  }

  onModalClose = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={this.state.modalOpen}
        contentLabel="Login Modal"
        onRequestClose={this.onModalClose}
      >
        <SessionFormContainer
          open={this.state.modalOpen}
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
