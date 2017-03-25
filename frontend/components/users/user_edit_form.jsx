import React from 'react';
import ImageUploadForm from '../shared/image_upload_form';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentUser.id,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.props.close();
  }

  setMainImg = (url) => {
    this.setState({ profile_image_url: url });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }


  render() {
    return (
      <div className="user-profile-edit-form">
        <div className="user-profile-form">
          <input
            type="text"
            className="login-input"
            placeholder="name"
            onChange={this.update('name')}
          />
          <input
            type="text"
            className="login-input"
            placeholder="bio"
            onChange={this.update('bio')}
          />
        </div>
        <h4>Select your Profile Image</h4>
        <ImageUploadForm setMainImg={this.setMainImg} />
        <div className="buttons">
          <button
            className="publish-story-button"
            onClick={this.handleSubmit}
          >
              Save
            </button>
          <button
            className="edit-button button"
            onClick={this.props.close}
          >
              Cancel
            </button>
        </div>
      </div>
    );
  }
}

export default UserEditForm;
