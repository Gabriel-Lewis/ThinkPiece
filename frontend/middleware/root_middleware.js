import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import StoryMiddleware from './story_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  StoryMiddleware,
  UserMiddleware
);

export default RootMiddleware;
