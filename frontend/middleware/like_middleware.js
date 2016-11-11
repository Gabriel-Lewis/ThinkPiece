import { CREATE_LIKE, DELETE_LIKE } from '../actions/like_actions';
import { receiveStory } from '../actions/story_actions';
// import { updateStory  } from '../util/story_api_util';
import {createLike, deleteLike } from '../util/like_api_util';

const LikeMiddleware = ({getState, dispatch}) => next => action => {
  let receiveStorySuccess = story => dispatch(receiveStory(story));

  switch (action.type) {
    case DELETE_LIKE:
      deleteLike(action.id, receiveStorySuccess);
      return next(action);
    case CREATE_LIKE:
      createLike(action.id, receiveStorySuccess);
      return next(action);
    default:
      return next(action);
  }
}

export default LikeMiddleware;
