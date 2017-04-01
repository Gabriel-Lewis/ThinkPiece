import * as APIUtil from '../util/story_api_util';

export const FETCH_STORIES = 'FETCH_STORIES';
export const FETCH_STORY = 'FETCH_STORY';
export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const CREATE_STORY = 'CREATE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';
export const DELETE_STORY = 'DELETE_STORY';
export const FETCH_USER_STORIES = 'FETCH_USER_STORIES';

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

export const fetchStories = () => dispatch => APIUtil.fetchStories()
.then(stories => dispatch(receiveAllStories(stories)));

export const fetchStory = id => dispatch => APIUtil.fetchStory(id)
  .then(story => dispatch(receiveStory(story)));

export const createStory = story => dispatch => APIUtil.createStory(story)
  .then(res => dispatch(receiveStory(res)));

export const updateStory = story => dispatch => APIUtil.updateStory(story)
  .then(res => dispatch(receiveStory(res)));

// export const deleteStory = id => dispatch => APIUtil.deleteStory(id);

export const fetchUsersStories = username => dispatch => APIUtil.fetchUsersStories(username)
  .then(stories => dispatch(receiveAllStories(stories)));
