import React from 'react';
import { Link } from 'react-router';

import StoryDetails from './story_details';

class StoryFeedItem extends React.Component {

  handleUnlike = () => {
    const { story, deleteLike } = this.props
    deleteLike(story.id);
  }

  handleLike = () => {
    const { story, createLike } = this.props
    createLike(story.id);
  }

  mainImgBlock = () => {
    const { story } = this.props
    if (story.main_image_url) {
      return (<img alt={story.title} src={story.main_image_url} />);
    }
    return <div />;
  }

  storyLikeDetails() {
    const { currentUser, open, story, handleUnlike, handleLike } = this.props;
    const { likeCount, liked } = story;
    if (!currentUser) {
      return (
        <div className="story-like-details">
          <button onClick={open}>
            <img
              alt="like-button"
              className="heart"
              src="http://i.imgur.com/6XPFTeT.png" />
          </button>
          <p>{likeCount}</p>
        </div>
      );
    }
    return (
      <StoryDetails
        currentUser={currentUser}
        unlike={this.handleUnlike}
        like={this.handleLike}
        liked={liked}
        likeCount={likeCount}
      />
    );
  }

  render() {
    const { user, story } = this.props
    return (
      <li className="story-index-item">
        <div className="story-author-link">
          <Link className to={`/users/${user.username}`} >
            <img
              alt={user.username}
              className="feed-profile-image user-image"
              src={user.profile_image_url}
            />
            {user.name}
          </Link>
        </div>
        <Link to={`/stories/${story.id}`}>
          {this.mainImgBlock()}
          <h3 className="story-index-item-title">{story.title}</h3>
        </Link>
        <Link className="read-more-button" to={`/stories/${story.id}`}>
          Read more...
        </Link>
        {this.storyLikeDetails()}
      </li>
    );
  }
}


export default StoryFeedItem;
