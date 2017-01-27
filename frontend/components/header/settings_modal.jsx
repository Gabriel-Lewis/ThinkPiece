import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router';

class SettingsModal extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleModal() {
    if (this.state.modalIsOpen) {
      this.setState({modalIsOpen: false});
    } else {
      this.setState({modalIsOpen: true});
    }
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }
  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render () {
    return (
      <div>
        <img
          className='feed-profile-image user-image'
          src={this.props.currentUser.profile_image_url}
          onClick={this.openModal}
          />
        <Modal
          className='settings-modal'
          overlayClassName='no-overlay'
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          >
          <ul>
            <li><Link className='' to='/new-story'>New Story</Link></li>
            <li><Link
              to={`/users/${this.props.currentUser.username}`}>
              Profile
            </Link></li>
            <li><button
              onClick={this.props.handleLogout}>
              Logout
            </button></li>
          </ul>
          </Modal>
      </div>
    )
  }
}

export default SettingsModal
