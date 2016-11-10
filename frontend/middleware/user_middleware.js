import {
  receiveAllUsers,
  receiveUser,
  FETCH_USER,
  FETCH_USERS,
  UPDATE_USER,
  FOLLOW_USER,
  UNFOLLOW_USER
} from '../actions/user_actions';

import {
  receiveCurrentUser
} from '../actions/session_actions'

import {
  updateUser,
  fetchUsers,
  fetchUser,
  followUser,
  unfollowUser
} from '../util/user_api_util';
import { hashHistory } from 'react-router';

const UserMiddleware = ({getState, dispatch}) => next => action => {

  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllUsersSuccess = stories => dispatch(receiveAllUsers(stories));
  let receiveUserSuccess = user => {dispatch(receiveUser(user))}
  let receiveUsersSuccess = (users) => {
    dispatch(receiveUser(users.user))
    dispatch(receiveCurrentUser(users.currentUser))
  };
  let removeUserSuccess = user => dispatch(removeUser(user));
  switch (action.type) {
    case FETCH_USER:
      fetchUser(action.id, receiveUserSuccess);
      return next(action);
    case FETCH_USERS:
      fetchUsers(receiveAllUsersSuccess);
      return next(action);
    case UPDATE_USER:
      debugger
      updateUser(action.user, receiveUserSuccess)
      return next(action);
    case FOLLOW_USER:
      followUser(action.id, receiveUsersSuccess)
      return next(action)
    case UNFOLLOW_USER:
      unfollowUser(action.id, receiveUsersSuccess)
      return next(action)
    default:
      return next(action);
  }
}

export default UserMiddleware;
