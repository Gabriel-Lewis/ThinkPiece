import { RECEIVE_USER} from '../actions/user_actions'
import merge from 'lodash/merge';

const defaultUser = {
  name: null,
  id: null,
  followers: null,
  follows: null,
  followed: false
};


const UserReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, action.user);
    default:
      return oldState;
  }
};

export default UserReducer;
