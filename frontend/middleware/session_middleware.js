import { receiveCurrentUser, receiveErrors, LOGIN, LOGOUT, SIGNUP } from '../actions/session_actions';
import { fetchStories } from '../actions/story_actions';
import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({ dispatch }) => next => (action) => {
  const successCallback = (user) => {
    dispatch(receiveCurrentUser(user)),
    dispatch(fetchStories());
  };
  const logoutCallback = () => {
    dispatch(fetchStories());
  };
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(logoutCallback);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
