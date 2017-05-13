import { connect } from 'react-redux';
import { fetchUser, followUser, unfollowUser, updateUser, removeUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { fetchUsersStories } from '../../actions/story_actions';

import UserProfile from './user_profile';

const mapStateToProps = ({ user, session, stories }) => {
  let following;
  const currentUser = session.currentUser;
  if (session.currentUser) {
    following = user.followers.map(_user => _user.id).includes(currentUser.id);
  }

  return ({
    currentUser,
    user,
    following,
    followerCount: user.followers,
    followingCount: user.following,
    stories: Object.keys(stories).map(id => stories[id]),
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  follow: id => dispatch(followUser(id)),
  unfollow: id => dispatch(unfollowUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  createLike: id => dispatch(createLike(id)),
  deleteLike: id => dispatch(deleteLike(id)),
  fetchUsersStories: id => dispatch(fetchUsersStories(id)),
  removeUser: user => dispatch(removeUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
