import merge from 'lodash/merge';

import { RECEIVE_STORY, RECEIVE_ALL_STORIES, REMOVE_STORY } from '../actions/story_actions';

const StoryReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STORY:
      return merge({}, state, { [action.story.id]: action.story });
    case RECEIVE_ALL_STORIES:
      return merge({}, action.stories);
    case REMOVE_STORY:
      const newState = merge({}, state);
      delete newState[action.story.id];
      return newState;
    default:
      return state;
  }
};

export default StoryReducer;
