import { RECEIVE_USER} from '../actions/user_actions'
import merge from 'lodash/merge';

const defaultUser = {
  name: null,
  id: null,
  followers: null,
  follows: null,
  followed: false
};
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
      // const followers = action.user.followers
      // const following = action.user.following
      return action.user;
    default:
      return oldState;
  }
};

export default UserReducer;
