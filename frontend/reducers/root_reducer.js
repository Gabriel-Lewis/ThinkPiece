import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import StoryReducer from './story_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stories: StoryReducer,
  user: UserReducer,
});

export default RootReducer;
