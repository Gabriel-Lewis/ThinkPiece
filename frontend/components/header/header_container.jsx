import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { createStory } from '../../actions/story_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  newStory: story => dispatch(createStory(story)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
