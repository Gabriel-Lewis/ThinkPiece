import {
  receiveAllUsers,
  receiveUser,
  FETCH_USER,
  FETCH_USERS,
  UPDATE_USER,
  FOLLOW_USER
} from '../actions/user_actions';

import {
  updateUser,
  fetchUsers,
  fetchUser,
  followUser
} from '../util/user_api_util';
import { hashHistory } from 'react-router';

const UserMiddleware = ({getState, dispatch}) => next => action => {

  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllUsersSuccess = stories => dispatch(receiveAllUsers(stories));
  let receiveUserSuccess = user => dispatch(receiveUser(user));
  let removeUserSuccess = user => dispatch(removeUser(user));
  switch (action.type) {
    case FETCH_USER:
      fetchUser(action.id, receiveUserSuccess);
      return next(action);
    case FETCH_USERS:
      fetchUsers(receiveAllUsersSuccess);
      return next(action);
    case UPDATE_USER:
      success = user => {
        dispatch(receiveUser(user));
        hashHistory.push(`users/${user.id}`);
      };
      updateUser(action.user, success)
      return next(action);
    case FOLLOW_USER:
      success = user => {
        dispatch(receiveUser(user));
        hashHistory.push(`users/${user.id}`)
      };
      followUser(action.id, success)
      return next(action)
    default:
      return next(action);
  }
}

export default UserMiddleware;
