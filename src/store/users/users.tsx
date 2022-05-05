import { combineReducers } from 'redux';
const ADD_USER = 'ADD_USER';
const INCREMENT_USER = 'INCREMENT_USER';

export function addUser(user: any) {
  return {
    type: ADD_USER,
    user,
  }
}

export function incrementUser(user: any) {
  return {
    type: INCREMENT_USER,
    user
  }
}

const defaultUsers = [
  {
    name: 'robin',
    views: 1,
  }
];

function users(state=defaultUsers, action: any) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          name: action.user,
          views: 1
        }
      ];
    case INCREMENT_USER:
      const user: any = state.find(b => action.user === b.name);
      const users = state.filter(b => action.user !== b.name);
      return [
        ...users,
        {
          ...user,
          views: user.views + 1
        }
      ];
    default:
      return state;
  }
}

const userApp = combineReducers({
  users
});

export default userApp;