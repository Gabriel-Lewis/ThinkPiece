import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import SessionMiddleware from './session_middleware';
import StoryMiddleware from './story_middleware';
import UserMiddleware from './user_middleware';
import LikeMiddleware from './like_middleware';


const logger = createLogger();

const RootMiddleware =
  applyMiddleware(
  SessionMiddleware,
  StoryMiddleware,
  UserMiddleware,
  LikeMiddleware,
  logger,
);

export default RootMiddleware;
