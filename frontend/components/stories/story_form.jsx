import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { convertToRaw } from 'draft-js';
import { Editor, createEditorState } from 'medium-draft';

import CustomImageSideButton from './shared/custom_image_side_button';
import StoryHeader from './story_header';

class StoryForm extends Component {

  constructor(props) {
    super(props);

    this.sideButtons = [{
      title: 'Image',
      component: CustomImageSideButton,
    }];
    this.state = {
      editorState: createEditorState(),
      editorEnabled: true,
      body: '',
      title: '',
      main_image_url: '',
    };

    this.onChange = (editorState, callback = this.setBody) => {
      if (this.state.editorEnabled) {
        this.setState({ editorState }, () => {
          if (callback) {
            callback();
          }
        });
      }
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      editorState: createEditorState(newProps.parsedBody),
      title: newProps.story.title,
      main_image_url: newProps.story.main_image_url,
      body: newProps.parsedBody,
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  };

  setBody = () => {
    const body = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    this.setState({ body });
  }

  handleDelete = () => {
    this.props.deleteStory(this.props.story.id);
  }

  setMainImg = (url) => {
    this.setState({ main_image_url: url });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    this.props.updateStory({
      id: this.props.story.id,
      title: this.state.title,
      body,
      user_id: this.props.story.user_id,
      main_image_url: this.state.main_image_url,
    },
    );
  }

  render() {
    const { editorState } = this.state;
    const story = this.props.story;
    if (!story) {
      return <p>Loading</p>;
    }

    return (
      <div>
        <StoryHeader
          submitStory={this.handleSubmit}
          deleteStory={this.handleDelete}
          currentUser={this.props.currentUser}
          setMainImg={this.setMainImg}
        />
        <div className="new-story">
          <input
            className="new-story-title"
            placeholder={`${this.props.story.title}`}
            type="text"
            onChange={this.update('title')}
          />
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            sideButtons={this.sideButtons}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(StoryForm);
