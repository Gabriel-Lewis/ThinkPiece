import { connect } from 'react-redux';
import { fetchUser, followUser, unfollowUser, updateUser } from '../../actions/user_actions';
import UserProfile from './user_profile'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  following: state.session.currentUser.following.map((user) => user.id).includes(state.user.id),
  followerCount: state.user.followers,
  followingCount: state.user.following,
  stories: state.user.stories
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  follow: (id) => dispatch(followUser(id)),
  unfollow: (id) => dispatch(unfollowUser(id)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
