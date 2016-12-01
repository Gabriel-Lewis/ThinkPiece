import { RECEIVE_USER} from '../actions/user_actions'
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: [],
  followers: [],
  following: [],
  stories: []
});


const UserReducer = (oldState = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return oldState;
  }
};

export default UserReducer;
