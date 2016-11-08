import {
  receiveAllStories,
  receiveStory,
  removeStory,
  CREATE_STORY,
  FETCH_STORY,
  FETCH_STORIES,
  UPDATE_STORY,
  DELETE_STORY,
   } from '../actions/story_actions';

import {
  createStory,
  deleteStory,
  updateStory,
  fetchStories,
  fetchStory
} from '../util/story_api_util';
import { hashHistory } from 'react-router';

const StoryMiddleware = ({getState, dispatch}) => next => action => {

  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllStoriesSuccess = stories => dispatch(receiveAllStories(stories));
  let receiveStorySuccess = story => dispatch(receiveStory(story));
  let removeStorySuccess = story => dispatch(removeStory(story));
  switch (action.type) {
    case FETCH_STORY:
      fetchStory(action.id, receiveStorySuccess);
      return next(action);
    case FETCH_STORIES:
      fetchStories(receiveAllStoriesSuccess);
      return next(action);
    case CREATE_STORY:
      success = story => {
        dispatch(receiveStory(story));
        hashHistory.push(`stories/${story.id}`);
      };
      createStory(action.story, success);
      return next(action);
    case UPDATE_STORY:
      success = story => {
        dispatch(receiveStory(story));
        hashHistory.push(`stories/${story.id}`);
      };
      updateStory(action.story, success)
      return next(action);
    case DELETE_STORY:
      success = story => {
        hashHistory.push('/');
      };
      deleteStory(action.id, success);
      return next(action);
    default:
      return next(action);
  }
}

export default StoryMiddleware;
