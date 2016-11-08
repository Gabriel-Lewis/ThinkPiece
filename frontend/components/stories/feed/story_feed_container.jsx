import { connect } from 'react-redux';
import { fetchStories } from '../../../actions/story_actions';
import StoryIndex from './story_feed';

const mapStateToProps = state => ({
  stories: Object.keys(state.stories).map(id => state.stories[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);
