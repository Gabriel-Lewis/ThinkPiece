import { connect } from 'react-redux';
import { fetchStories } from '../../../actions/story_actions';
import { createLike, deleteLike } from '../../../actions/like_actions';
import StoryIndex from './story_feed';

const mapStateToProps = state => ({
  stories: Object.keys(state.stories).map(id => state.stories[id]),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(fetchStories()),
  createLike: id => dispatch(createLike(id)),
  deleteLike: id => dispatch(deleteLike(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoryIndex);
