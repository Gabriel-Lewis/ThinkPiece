import { connect } from 'react-redux';
import { fetchUser, followUser } from '../../actions/user_actions';
import UserProfile from './user_profile'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  followUser: (followed_id) => dispatch(followUser(followed_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
