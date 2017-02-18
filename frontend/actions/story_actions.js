export const FETCH_STORIES = 'FETCH_STORIES';
export const FETCH_STORY = 'FETCH_STORY';
export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const CREATE_STORY = 'CREATE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';
export const DELETE_STORY = 'DELETE_STORY';
export const FETCH_USER_STORIES = 'FETCH_USER_STORIES';

export const fetchStories = () => ({
  type: FETCH_STORIES,
});

export const fetchStory = id => ({
  type: FETCH_STORY,
  id,
});

export const createStory = story => ({
  type: CREATE_STORY,
  story,
});

export const updateStory = story => ({
  type: UPDATE_STORY,
  story,
});

export const deleteStory = id => ({
  type: DELETE_STORY,
  id,
});

export const receiveAllStories = stories => ({
  type: RECEIVE_ALL_STORIES,
  stories,
});

export const receiveStory = story => ({
  type: RECEIVE_STORY,
  story,
});

export const removeStory = story => ({
  type: REMOVE_STORY,
  story,
});

export const fetchUsersStories = username => ({
  type: FETCH_USER_STORIES,
  username,
});
