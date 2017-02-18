import React from 'react';
import Modal from 'react-modal';
import UserEditForm from './user_edit_form';

class UserProfileEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleModal() {
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: false });
    } else {
      this.setState({ modalIsOpen: true });
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button
          onClick={this.openModal}
          className="edit-button button"
        >Edit
        </button>

        <Modal
          className="user-profile-modal"
          overlayClassName="overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="User Edit Profile Modal"
        >
          <UserEditForm
            close={this.closeModal}
            updateUser={this.props.updateUser}
            currentUser={this.props.currentUser}
          />
        </Modal>
      </div>
    );
  }
}

export default UserProfileEditModal;
