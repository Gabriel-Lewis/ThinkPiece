import { connect } from 'react-redux';
import NewStory from './new_story';
import { createStory } from '../../actions/story_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createStory: story => dispatch(createStory(story)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewStory);
