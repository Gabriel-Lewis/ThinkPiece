import * as APIUtil from '../util/user_api_util';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const removeUser = user => ({
  type: REMOVE_USER,
  user,
});

export const followUser = id => dispatch => APIUtil.followUser(id)
  .then(user => dispatch(receiveUser(user)));

export const unfollowUser = id => dispatch => APIUtil.unfollowUser(id)
  .then(user => dispatch(receiveUser(user)));

export const fetchUsers = () => dispatch => APIUtil.fetchUsers()
  .then(user => dispatch(receiveUser(user)));

export const fetchUser = username => dispatch => APIUtil.fetchUser(username)
  .then(user => dispatch(receiveUser(user)));

export const createUser = user => dispatch => APIUtil.createUser(user)
  .then(res => dispatch(receiveUser(res)));

export const updateUser = user => dispatch => APIUtil.updateUser(user)
  .then(res => dispatch(receiveUser(res)));

export const deleteUser = id => dispatch => APIUtil.deleteUser(id)
  .then(user => dispatch(receiveUser(user)));
