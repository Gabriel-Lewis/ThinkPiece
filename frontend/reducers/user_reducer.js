import { RECEIVE_USER, REMOVE_USER} from '../actions/user_actions'
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  errors: [],
  followers: [],
  following: [],
  stories: [],
  id: 0
});


const UserReducer = (oldState = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case REMOVE_USER:
      return _nullUser
    default:
      return oldState;
  }
};

export default UserReducer;
