import React, { Component } from 'react';
import { Editor, createEditorState, } from 'medium-draft';

import { convertToRaw } from 'draft-js';
import CustomImageSideButton from './shared/custom_image_side_button';
import StoryHeader from './story_header';

class NewStory extends Component {

  constructor(props) {
    super(props);

    this.sideButtons = [{
      title: 'Image',
      component: CustomImageSideButton,
    }];

    this.state = {
      editorState: createEditorState(),
      editorEnabled: true,
      title: '',
      body: '',
      main_image_url: '',
    };
  }

  componentDidMount() {
    this.refs.title.focus();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  publishStory = () => {
    const { title, editorState, main_image_url } = this.state;
    const userId = this.props.currentUser.id;
    const body = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    this.props.createStory({ title, body, userId, main_image_url });
  }

  setMainImg = (main_image_url) => {
    this.setState({ main_image_url });
  }

  render() {
    const { editorState } = this.state;
    const { currentUser, logout } = this.props;
    return (
      <div>
        <StoryHeader
          submitStory={this.publishStory}
          logout={logout}
          currentUser={currentUser}
          setMainImg={this.setMainImg}
          pageType="new"
        />
        <div className="new-story">
          <input
            className="new-story-title"
            placeholder="Title"
            ref="title"
            type="text"
            onChange={this.update('title')}
          />
          <Editor
            editorState={editorState}
            onChange={(editorState) => this.setState({ editorState })}
            sideButtons={this.sideButtons}
            placeholder="Tell your story..."
          />
        </div>
      </div>
    );
  }
}

export default NewStory;
