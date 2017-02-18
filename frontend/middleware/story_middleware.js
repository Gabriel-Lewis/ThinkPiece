import { browserHistory } from 'react-router';

import {
  receiveAllStories,
  receiveStory,
  removeStory,
  CREATE_STORY,
  FETCH_STORY,
  FETCH_STORIES,
  UPDATE_STORY,
  DELETE_STORY,
  FETCH_USER_STORIES,
   } from '../actions/story_actions';

import {
  createStory,
  deleteStory,
  updateStory,
  fetchStories,
  fetchStory,
  fetchUsersStories,
} from '../util/story_api_util';

const StoryMiddleware = ({ dispatch }) => next => (action) => {
  let success;
  const receiveAllStoriesSuccess = stories => dispatch(receiveAllStories(stories));
  const receiveStorySuccess = story => dispatch(receiveStory(story));
  const removeStorySuccess = story => dispatch(removeStory(story));
  switch (action.type) {
    case FETCH_STORY:
      fetchStory(action.id, receiveStorySuccess);
      return next(action);
    case FETCH_USER_STORIES:
      fetchUsersStories(action.username, receiveAllStoriesSuccess);
      return next(action);
    case FETCH_STORIES:
      fetchStories(receiveAllStoriesSuccess);
      return next(action);
    case CREATE_STORY:
      success = (story) => {
        dispatch(receiveStory(story));
        browserHistory.push(`/stories/${story.id}`);
      };
      createStory(action.story, success);
      return next(action);
    case UPDATE_STORY:
      success = (story) => {
        dispatch(receiveStory(story));
        browserHistory.push(`/stories/${story.id}`);
      };
      updateStory(action.story, success);
      return next(action);
    case DELETE_STORY:
      success = () => {
        browserHistory.push('/');
      };
      deleteStory(action.id, success);
      return next(action);
    default:
      return next(action);
  }
};

export default StoryMiddleware;
