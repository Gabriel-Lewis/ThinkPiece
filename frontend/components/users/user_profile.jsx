import React from 'react';
import UserProfileEditModal from './user_profile_edit_modal'
import ProfileStoryFeed from '../stories/feed/profile_story_feed';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.userProfileButtons =this.userProfileButtons.bind(this)
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnfollow = this.handleUnfollow.bind(this)
    this.unfollowButton = this.unfollowButton.bind(this)
    this.followButton = this.followButton.bind(this)
    this.userFollowerCount = this.userFollowerCount.bind(this)
  }

  handleFollow() {
    this.props.follow(this.props.user.id)
  }

  handleUnfollow() {
    this.props.unfollow(this.props.user.id)
  }

  unfollowButton () {
    return (<button
      onClick={this.handleUnfollow}
      className='unfollow-button button'
      >Following</button>)
  }

  followButton() {
    return (<button
      onClick={this.handleFollow}
      className='follow-button button'
      >Follow</button>)
  }
  userFollowerCount(){
    if (this.props.user) {
      return (
        <div className='followerCountLabels'>
          <p><span>{this.props.user.following.length} Following</span><span>{this.props.user.followers.length} Followers</span></p>
        </div>
      );
    }
  }


  userProfileButtons() {
    if (this.props.user && this.props.currentUser) {
      if (this.props.user.id === this.props.currentUser.id) {
        return (<UserProfileEditModal currentUser={this.props.currentUser} updateUser={this.props.updateUser} />)
      } else if (this.props.following) {
        return (this.unfollowButton())
      } else {
        return (this.followButton())
      }
    }
  }

  render() {
    const user = this.props.user;

    if (!user) {
        return <p>Loading</p>
    }
    return (
      <div>
      <div className='full-user-profile'>
      <div className='user-profile'>
        <div className='user-profile-details'>
        <div className='hero-description' >
          <h1 className='user-name'>{user.name}</h1>
          <p className='user-bio'>{user.bio}</p>
        </div>
          <div className='float-right'>
            <img className='profile-image user-image' src={user.profile_image_url} />
          </div>
        </div>
        {this.userFollowerCount()}
        {this.userProfileButtons()}
      </div>
      </div>
      <ProfileStoryFeed currentUser={this.props.currentUser} fetchUsersStories={this.props.fetchUsersStories} user={this.props.user} stories={this.props.stories} />
    </div>
      );
    }
}



export default UserProfile;
