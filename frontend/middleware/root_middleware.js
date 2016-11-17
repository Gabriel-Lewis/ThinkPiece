import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import StoryMiddleware from './story_middleware';
import UserMiddleware from './user_middleware';
import LikeMiddleware from './like_middleware';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const logger = createLogger();

const RootMiddleware =
  applyMiddleware(
  SessionMiddleware,
  StoryMiddleware,
  UserMiddleware,
  LikeMiddleware
);

export default RootMiddleware;
