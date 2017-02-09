import React from 'react';
import Modal from 'react-modal';
import ImageUploadForm from '../stories/shared/image_upload_form';

class UserProfileEditModal extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      id: this.props.currentUser.id,
      name: this.props.currentUser.name,
      bio: this.props.currentUser.bio,
      profile_image_url: this.props.currentUser.profile_image_url
    }
    this.openModal = this.openModal.bind(this)
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setMainImg = this.setMainImg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleModal() {
    if (this.state.modalIsOpen) {
      this.setState({modalIsOpen: false});
    } else {
      this.setState({modalIsOpen: true});
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateUser({
      id: this.state.id,
      name: this.state.name,
      profile_image_url: this.state.profile_image_url,
      bio: this.state.bio
    });
    this.closeModal()
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }
  closeModal(){
    this.setState({modalIsOpen: false});
  }

  setMainImg(url) {
    this.setState({profile_image_url: url})
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }


  render () {
    return (
      <div>
        <button
          onClick={this.openModal}
          className='edit-button button'
          >Edit
        </button>

        <Modal
          className='user-profile-modal'
          overlayClassName='overlay'
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="User Edit Profile Modal"
          >
          <div className='user-profile-form'>
          <input
            type='text'
            className='login-input'
            placeholder='name'
            onChange={this.update('name')}
            />
            <input
              type='text'
              className='login-input'
              placeholder='bio'
              onChange={this.update('bio')}
              />
        </div>
          <h4>Select your Profile Image</h4>
          <ImageUploadForm setMainImg={this.setMainImg} />
          <div className='buttons'>
          <button
            className='publish-story-button'
            onClick={this.handleSubmit}>
            Save
          </button>
          <button
            className='edit-button button'
            onClick={this.closeModal}>
            Cancel
          </button>
        </div>
          </Modal>
      </div>
    )
  }
}

export default UserProfileEditModal
