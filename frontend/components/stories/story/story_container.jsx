import { connect } from 'react-redux';
import { fetchStory, updateStory, deleteStory } from '../../../actions/story_actions';
import Story from './story'

const mapStateToProps = (state, ownProps) => {
  // Only parse body if story is in state
  if (Object.keys(state.stories).length > 0) {
    const blockData = JSON.parse(state.stories[ownProps.params.storyId].body);
    return {
          story: state.stories[ownProps.params.storyId],
          parsedBody: blockData,
          currentUser: state.session.currentUser
      }
  }
  return {story: null}
};

const mapDispatchToProps = dispatch => ({
  fetchStory: (id) => dispatch(fetchStory(id)),
  updateStory: (id) => dispatch(updateStory(id)),
  deleteStory: (id) => dispatch(deleteStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
