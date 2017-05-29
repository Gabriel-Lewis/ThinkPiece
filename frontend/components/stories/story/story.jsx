import React from 'react';
import { Editor, createEditorState } from 'medium-draft';
import { Link, withRouter } from 'react-router';

import StoryDetails from '../feed/story_details';
import SessionFormModal from '../../modals/session_form_modal';

class Story extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(),
      editorEnabled: false,
      modalOpen: false,
    };

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

  onModalOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleUnlike = () => {
    const { story, deleteLike } = this.props;
    deleteLike(story.id);
  }

  handleLike = () => {
    const { story, createLike } = this.props;
    createLike(story.id);
  }

  editLinkForAuthor = () => {
    const { story, currentUser } = this.props;
    if (story !== {} && currentUser) {
      if (story.user.id === currentUser.id) {
        return (
          <div className="story-options">
            <Link to={`/stories/${story.id}/edit`}>Edit</Link>
          </div>
        );
      }
    }
    return null
  }

  storyLikeButton = () => {
    const { currentUser, story } = this.props;
    if (currentUser) {
      return (
        <StoryDetails
          unlike={this.handleUnlike}
          like={this.handleLike}
          liked={story.liked}
          likeCount={story.likeCount}
        />
      );
    }
    return (
      <div className="after-story-details" >
        <div className="story-like-details">
          <button onClick={this.onModalOpen}>
            <img className="heart" src="http://i.imgur.com/6XPFTeT.png" />
          </button>
          <p>{story.likeCount}</p>
          <SessionFormModal
            isOpen={this.state.modalOpen}
          />
        </div>
      </div>
    );
  }

  render() {
    const { editorState } = this.state;
    const { story } = this.props;

    if (!story || story === {}) {
      return (<div className="cp-spinner cp-heart" />);
    }

    return (
      <div className="story">
        <div className="author-header">
          <Link to={`/users/${story.user.username}`}>
            <img
              alt="like-button"
              className="user-image"
              src={story.user.profile_image_url}
            />
            <div className="author-details">
              <p className="author-name">{story.user.name}</p>
              <p className="author-bio">{story.user.bio}</p>
            </div>
          </Link>
        </div>
        <h3
          className="story-title"
        >{story.title}</h3>
        <p
          className="story-view-count">
          {story.view_count} views
        </p>
        <Editor
          placeholder="Loading..."
          editorState={editorState}
          onChange={this.onChange}
        />
        <div>{this.editLinkForAuthor()}</div>
        <div>{this.storyLikeButton()}</div>
      </div>
    );
  }
}

export default withRouter(Story);
