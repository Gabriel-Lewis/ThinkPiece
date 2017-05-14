import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';

class SettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { currentUser, handleLogout } = this.props
    const { modalIsOpen } = this.state
    const { username, profile_image_url } = currentUser
    return (
      <div>
        <img
          alt={username}
          className="feed-profile-image user-image"
          src={profile_image_url}
          onClick={this.openModal}
        />
        <Modal
          className="settings-modal"
          overlayClassName="no-overlay"
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Settings Modal"
        >
          <ul>
            <li>
              <Link to="/new-story">
                New Story
              </Link>
            </li>
            <li>
              <Link to={`/users/${username}`}>
                Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </Modal>
      </div>
    );
  }
}

export default SettingsModal;
