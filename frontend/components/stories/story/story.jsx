import React from 'react';
import {
  Editor,
  createEditorState
} from 'medium-draft';

import { convertToRaw } from 'draft-js';
import { Link, withRouter } from 'react-router';

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
    if (this.props.story !== {}) {
      if (this.props.story.user.id === this.props.currentUser.id) {
        return (
          <div className='story-options'>
          <Link to={`stories/${this.props.story.id}/edit`}>Edit</Link>
          
          </div>
        );
      } else {
        return (
          <p>nothing</p>
        )
      }
    }
  }

  render() {

    const { editorState } = this.state;
    const story = this.props.story;
    if (!story) {
        return <p>Loading</p>
    }
    return (
      <div className='story'>
        <Link to={`users/${story.user.id}`}><h3>{story.user.username}</h3></Link>

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
