import merge from 'lodash/merge';

import { LIKE_RECEIVED, LIKE_REMOVED } from '../actions/like_actions';

const LikeReducer = (oldState = {}, action) => {
  switch (action.type) {
    case LIKE_RECEIVED:
      return merge({}, oldState, { [action.like.storyId]: action.like });
    case LIKE_REMOVED:
      const newState = merge({}, oldState);
      delete newState[action.like.id];
      return newState;
    default:
      return oldState;
  }
};

export default LikeReducer;
