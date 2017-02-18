import React from 'react';
import {
  Editor,
  createEditorState,
} from 'medium-draft';

import { convertToRaw } from 'draft-js';

import CustomImageSideButton from './shared/custom_image_side_button';
import StoryHeader from './story_header';

class NewStory extends React.Component {

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
    this.publishStory = this.publishStory.bind(this);
    this.setMainImg = this.setMainImg.bind(this);

    this.onChange = (editorState, callback = null) => {
      if (this.state.editorEnabled) {
        this.setState({ editorState }, () => {
          if (callback) {
            callback();
          }
        });
      }
    };
  }

  componentDidMount() {
    this.refs.editor.focus();
  }

  setMainImg(url) {
    this.setState({ main_image_url: url });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  publishStory() {
    const body = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    this.props.createStory({
      title: this.state.title,
      body,
      userId: this.props.currentUser.id,
      main_image_url: this.state.main_image_url });
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <StoryHeader
          submitStory={this.publishStory}
          currentUser={this.props.currentUser}
          setMainImg={this.setMainImg}
          pageType="new"
        />
        <div className="new-story">
          <input
            className="new-story-title"
            placeholder="Title"
            type="text"
            onChange={this.update('title')}
          />
          <Editor
            ref="editor"
            editorState={editorState}
            onChange={this.onChange}
            sideButtons={this.sideButtons}
            placeholder="Tell your story..."
          />
        </div>
      </div>
    );
  }
}

export default NewStory;
