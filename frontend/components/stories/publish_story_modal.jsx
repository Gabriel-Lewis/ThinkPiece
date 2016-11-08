import React from 'react';
import Modal from 'react-modal';
import ImageUploadForm from './shared/image_upload_form';

class PublishStoryModal extends React.Component{
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
        <button
          onClick={this.openModal}
          className='medium-green-button'
          >Publish
        </button>
        <Modal
          className='publish-modal'
          overlayClassName='no-overlay'
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          >
          <h4>Select your stories main image</h4>
          <ImageUploadForm setMainImg={this.props.setMainImg} />
          <button
            className='publish-story-button'
            onClick={this.props.submitStory}>
            Publish
          </button>
          </Modal>
      </div>
    )
  }
}

export default PublishStoryModal
