import { Action, ActionTypes } from '../actions/types';
const initialState = {
  loading: false,
  project: null,
  projects: [],
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
    case ActionTypes.GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    default:
      return state;
  }
};
