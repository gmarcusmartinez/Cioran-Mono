import { Action, ActionTypes } from '../actions/types';

const initialState = {
  loading: true,
  project: null,
  projects: [],
};

export const projects = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, payload],
      };
    case ActionTypes.GET_PROJECT:
      return {
        ...state,
        loading: false,
        project: payload,
      };
    case ActionTypes.GET_PROJECTS:
      return {
        ...state,
        loading: false,
        projects: payload,
      };
    default:
      return state;
  }
};
