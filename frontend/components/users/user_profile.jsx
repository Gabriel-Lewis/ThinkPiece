import React, { Component } from 'react';

import UserProfileEditModal from './user_profile_edit_modal';
import ProfileStoryFeed from '../stories/feed/profile_story_feed';
import ErrorMessage from './../shared/not_found_component';

class UserProfile extends Component {

  componentWillUnmount() {
    this.props.removeUser(this.props.user);
  }

  handleFollow = () => {
    this.props.follow(this.props.user.id);
  }

  handleUnfollow = () => {
    this.props.unfollow(this.props.user.id);
  }

  unfollowButton = () => (
    <button
      onClick={this.handleUnfollow}
      className="unfollow-button button"
    >Following</button>
  )

  followButton = () => (
    <button onClick={this.handleFollow} className="follow-button button" >Follow</button>
  )

  userFollowerCount = () => {
    if (this.props.user) {
      return (
        <div className="followerCountLabels">
          <p>
            <span>
              <span className="follower-number">
                {this.props.user.following.length}</span>Following
            </span>
            <span>
              <span className="follower-number">
                {this.props.user.followers.length}</span>Followers
            </span>
          </p>
        </div>
      );
    }
  }


  userProfileButtons = () => {
    if (this.props.user && this.props.currentUser) {
      if (this.props.user.id === this.props.currentUser.id) {
        return (
          <UserProfileEditModal
            currentUser={this.props.currentUser}
            updateUser={this.props.updateUser}
          />);
      } else if (this.props.following) {
        return (this.unfollowButton());
      }
      return (this.followButton());
    }
  }

  render() {
    const user = this.props.user;

    if (user.id === 0) {
      return (<ErrorMessage />);
    }

    return (
      <div>
        <div className="full-user-profile">
          <div className="user-profile">
            <div className="user-profile-details">
              <div className="hero-description" >
                <h1 className="user-name">{user.name}</h1>
                <p className="user-bio">{user.bio}</p>
              </div>
              <div className="float-right">
                <img
                  alt={user.name}
                  className="profile-image user-image"
                  src={user.profile_image_url}
                />
              </div>
            </div>
            {this.userFollowerCount()}
            {this.userProfileButtons()}
          </div>
        </div>
        <ProfileStoryFeed
          createLike={this.props.createLike}
          deleteLike={this.props.deleteLike}
          currentUser={this.props.currentUser}
          user={user}
          stories={this.props.stories}
        />
      </div>
    );
  }
}


export default UserProfile;
