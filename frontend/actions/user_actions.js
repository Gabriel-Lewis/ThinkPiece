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


export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchUser = username => ({
  type: FETCH_USER,
  username,
});

export const createUser = user => ({
  type: CREATE_USER,
  user,
});

export const updateUser = user => ({
  type: UPDATE_USER,
  user,
});

export const deleteUser = id => ({
  type: DELETE_USER,
  id,
});

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

export const followUser = id => ({
  type: FOLLOW_USER,
  id,
});
export const unfollowUser = id => ({
  type: UNFOLLOW_USER,
  id,
});
