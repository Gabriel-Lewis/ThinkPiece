import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { fetchStory, fetchUsersStories } from '../actions/story_actions'
import { fetchUser } from '../actions/user_actions'

import App from './app';
import StoryIndexContainer from './stories/feed/story_feed_container';
import StoryFormContainer from './stories/story_form_container';
import StoryContainer from './stories/story/story_container';
import NewStoryContainer from './stories/new_story_container';
import UserProfileContainer from './users/user_profile_container';

const Root = ({ store }) => {
  const onEnterFetchStory = (nextState) => {
    store.dispatch(fetchStory(nextState.params.storyId))
  }

  const onEnterFetchUser = (nextState) => {
    store.dispatch(fetchUser(nextState.params.userId))
    store.dispatch(fetchUsersStories(nextState.params.userId));
  }

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={StoryIndexContainer} />
          <Route path="/stories" component={StoryIndexContainer} />
          <Route path="/stories/:storyId" component={StoryContainer} onEnter={onEnterFetchStory}/>
          <Route path="/users/:userId" component={UserProfileContainer} onEnter={onEnterFetchUser}/>
        </Route>
        <Route path='/new-story' component={NewStoryContainer} />
        <Route path="/stories/:storyId/edit" component={StoryFormContainer} onEnter={onEnterFetchStory} />
      </Router>
    </Provider>
  )
}

export default Root;
