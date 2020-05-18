import { Action, ActionTypes } from '../actions/types';

export const initialAuthState = {
  loading: true,
  currentUser: null,
  isAuthenticated: false,
};

export const auth = (state = initialAuthState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case ActionTypes.SIGNOUT:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.currentUser,
        isAuthenticated: false,
      };
    case ActionTypes.SIGNUP:
    case ActionTypes.SIGNIN:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
