import { connect } from 'react-redux';
import { fetchStory, updateStory, deleteStory } from '../../actions/story_actions';
import StoryForm from './story_form'

const mapStateToProps = (state, ownProps) => {
  if (Object.keys(state.stories).length > 0) {
    const blockData = JSON.parse(state.stories[ownProps.params.storyId].body);
    return {
          story: state.stories[ownProps.params.storyId],
          parsedBody: blockData,
          currentUser: state.session.currentUser
      }
  }
  return {story: state.stories[0]}
};

const mapDispatchToProps = dispatch => ({
  fetchStory: id => dispatch(fetchStory(id)),
  updateStory: story => dispatch(updateStory(story)),
  deleteStory: id => dispatch(deleteStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm);
