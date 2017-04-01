import * as APIUtil from '../util/like_api_util';
import { receiveStory } from './story_actions';

export const CREATE_LIKE = 'CREATE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

export const createLike = id => dispatch => APIUtil.createLike(id)
  .then(story => dispatch(receiveStory(story)));

export const deleteLike = id => dispatch => APIUtil.deleteLike(id)
  .then(story => dispatch(receiveStory(story)));
