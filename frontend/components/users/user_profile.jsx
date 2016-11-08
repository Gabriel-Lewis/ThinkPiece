import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.userProfileButtons =this.userProfileButtons.bind(this)
    this.handleFollow = this.handleFollow.bind(this)
    this.state = {
      followed_id: this.props.user.id
    }
  }

  handleFollow() {
    this.props.followUser(this.state.followed_id)
  }

  userProfileButtons() {
    
    if (this.props.user.id) {
      if (this.props.user.id === this.props.currentUser.id) {
        return (<button
          className='edit-button'
          >Edit</button>)
      } else {
      return (<button
        onClick={this.handleFollow}
        className='follow-button'
        >Follow</button>)
      }
    }
  }


  render() {

    const user = this.props.user;
    if (!user) {
        return <p>Loading</p>
    }
    return (
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
        {this.userProfileButtons()}

      </div>
      );
  }
}

export default UserProfile;
