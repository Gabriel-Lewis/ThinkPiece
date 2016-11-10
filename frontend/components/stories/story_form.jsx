import React from 'react';
import { withRouter } from 'react-router';
import { convertToRaw } from 'draft-js'
import { Editor, createEditorState } from 'medium-draft';
import CustomImageSideButton from './shared/custom_image_side_button';
import StoryHeader from './story_header';

class StoryForm extends React.Component {

  constructor(props) {
    super(props)

    this.sideButtons = [{
      title: 'Image',
      component: CustomImageSideButton,
    }];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setMainImg = this.setMainImg.bind(this);
    this.setBody = this.setBody.bind(this);
    this.state = {
      editorState: createEditorState(),
      editorEnabled: true,
      body: '',
      title: '',
      main_image_url: ''
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

  handleSubmit(e) {
    e.preventDefault();
    let body = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    this.props.updateStory({id: this.props.story.id, title: this.state.title, body: body, user_id:this.props.story.user_id, main_image_url: this.state.main_image_url}
    );
  }

  setBody() {
    let body = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    this.setState({body: body});
  }


  handleDelete() {
    this.props.deleteStory(this.props.story.id)
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  setMainImg(url) {
    this.setState({main_image_url: url})
  }


  componentWillReceiveProps(newProps) {
    this.setState({
      editorState: createEditorState(newProps.parsedBody),
      title: newProps.story.title,
      main_image_url: newProps.story.main_image_url,
      body: newProps.parsedBody
    });

  }

  render() {
    const { editorState } = this.state;
    const story = this.props.story
    if (!story) {
        return <p>Loading</p>
    }

    return (
      <div>
        <StoryHeader
          submitStory={this.handleSubmit}
          deleteStory={this.handleDelete}
          currentUser={this.props.currentUser}
          setMainImg={this.setMainImg}
          />
        <div className='new-story'>
          <input
            className='new-story-title'
            placeholder={`${this.props.story.title}`}
            type='text'
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
