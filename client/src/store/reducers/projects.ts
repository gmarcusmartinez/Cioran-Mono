import { Action, ActionTypes } from '../actions/types';
const initialState = {
  loading: false,
  project: null,
};

export const projects = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_PROJECT:
      return {
        ...state,
        project: payload,
      };
    case ActionTypes.GET_PROJECT:
      return {
        ...state,
        project: payload,
      };
    default:
      return state;
  }
};
