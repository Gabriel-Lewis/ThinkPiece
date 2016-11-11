import { LIKE_RECEIVED, LIKE_REMOVED} from '../actions/like_actions'
import merge from 'lodash/merge';

const LikeReducer = (oldState = {}, action) => {

  switch (action.type) {
    case LIKE_RECEIVED:
      return merge({}, oldState, {[action.like.storyId]: action.like});
    case LIKE_REMOVED:
      let newState = merge({}, oldState);
      delete newState[action.like.id];
      return newState
    default:
      return oldState;
  }
};

export default LikeReducer;
