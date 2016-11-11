import { connect } from 'react-redux';
import { fetchUser, followUser, unfollowUser, updateUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import {fetchUsersStories } from '../../actions/story_actions';
import UserProfile from './user_profile'

const mapStateToProps = (state, ownProps) => {
  let following;
  if (state.session.currentUser) {
    following = state.session.currentUser.following.map((user) => user.id).includes(state.user.id);
  }

  return ({
    currentUser: state.session.currentUser,
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
  fetchUsersStories: (id) => dispatch(fetchUsersStories(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
