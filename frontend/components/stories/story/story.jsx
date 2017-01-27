import React from 'react';
import {
  Editor,
  createEditorState
} from 'medium-draft';

import { convertToRaw } from 'draft-js';
import { Link, withRouter } from 'react-router';

import ErrorMessage from '../../shared/not_found_component';

class Story extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: createEditorState(),
      editorEnabled: false
    };

    this.editLinkForAuthor = this.editLinkForAuthor.bind(this)

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

  componentWillReceiveProps(newProps) {
    this.setState({
      editorState: createEditorState(newProps.parsedBody),
    });
  }

  editLinkForAuthor() {
    if (this.props.story !== {} && this.props.currentUser) {
      if (this.props.story.user.id === this.props.currentUser.id) {
        return (
          <div className='story-options'>
          <Link to={`/stories/${this.props.story.id}/edit`}>Edit</Link>

          </div>
        );
      }
    }
  }

  render() {

    const { editorState } = this.state;
    const story = this.props.story;

    if (!story) {
        return (<ErrorMessage />)
    }
    return (
      <div className='story'>
        <div className='author-header'>
        <Link to={`/users/${story.user.username}`}>
          <img
            className='user-image'
            src={story.user.profile_image_url}
            />
          <div className="author-details"><p className="author-name">{story.user.name}</p><p className="author-bio">{story.user.bio}</p></div>
        </Link>
        </div>
        <h3
          className='story-title'
          >{story.title}</h3>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            />
          <div>{this.editLinkForAuthor()}</div>
      </div>
      );
  }
}

export default withRouter(Story);
