import { connect } from 'react-redux';
import { fetchUser, followUser, unfollowUser, updateUser, removeUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import {fetchUsersStories } from '../../actions/story_actions';
import UserProfile from './user_profile'

const mapStateToProps = (state, ownProps) => {
  let following;
  let currentUser = state.session.currentUser
  if (state.session.currentUser) {
    following = state.user.followers.map((user) => user.id).includes(currentUser.id)
  }

  return ({
    currentUser: currentUser,
    user: state.user,
    following: following,
    followerCount: state.user.followers,
    followingCount: state.user.following,
    stories: Object.keys(state.stories).map(id => state.stories[id])
  })
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  follow: (id) => dispatch(followUser(id)),
  unfollow: (id) => dispatch(unfollowUser(id)),
  updateUser: (user) => dispatch(updateUser(user)),
  createLike: (id) => dispatch(createLike(id)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  fetchUsersStories: (id) => dispatch(fetchUsersStories(id)),
  removeUser: (user) => dispatch(removeUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
