import { Action, ActionTypes } from '../actions/types';

const initialState = {
  loading: true,
  currentUser: null,
};

export const auth = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SIGNOUT:
    case ActionTypes.GET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.currentUser,
      };
    case ActionTypes.SIGNUP:
    case ActionTypes.SIGNIN:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
