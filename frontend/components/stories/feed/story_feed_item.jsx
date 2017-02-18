import React from 'react';
import { Link } from 'react-router';

import StoryDetails from './story_details';

class StoryFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.story = props.story;
    this.user = props.user;
    this.mainImgBlock = this.mainImgBlock.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  handleUnlike() {
    const id = this.story.id;
    this.props.deleteLike(id);
  }

  handleLike() {
    const id = this.story.id;
    this.props.createLike(id);
  }

  mainImgBlock() {
    if (this.story.main_image_url) {
      return (<img alt={this.story.title} src={this.story.main_image_url} />);
    }
    return <div />;
  }

  storyLikeDetails() {
    if (!this.props.currentUser) {
      return (
        <div className="story-like-details">
          <button onClick={this.props.open}>
            <img alt="like-button" className="heart" src="http://i.imgur.com/6XPFTeT.png" />
          </button>
          <p>{this.props.story.likeCount}</p>
        </div>
      );
    }
    return (
      <StoryDetails
        currentUser={this.props.currentUser}
        unlike={this.handleUnlike}
        like={this.handleLike}
        liked={this.props.story.liked}
        likeCount={this.props.story.likeCount}
      />
    );
  }

  render() {
    return (
      <li className="story-index-item">
        <div className="story-author-link">
          <Link className to={`/users/${this.user.username}`} >
            <img
              alt={this.user.username}
              className="feed-profile-image user-image"
              src={this.user.profile_image_url}
            />
            {this.user.name}
          </Link>
        </div>
        <Link to={`/stories/${this.story.id}`}>
          {this.mainImgBlock()}
          <h3 className="story-index-item-title">{this.story.title}</h3>
        </Link>
        <Link className="read-more-button" to={`/stories/${this.story.id}`}>
          Read more...
        </Link>
        {this.storyLikeDetails()}
      </li>
    );
  }
}


export default StoryFeedItem;
