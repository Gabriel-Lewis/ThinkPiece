import { connect } from 'react-redux';

import Header from './header';
import { logout } from '../../actions/session_actions';
import { createStory } from '../../actions/story_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  newStory: story => dispatch(createStory(story)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
