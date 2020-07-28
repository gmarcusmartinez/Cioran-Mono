import { AnyAction } from 'redux';
import { ActionTypes } from 'store/actions/types';
import { ProjectActionTypes } from 'store/actions/types';

const initialState = {
  loading: true,
  project: null,
  projects: [],
};

export const projects = (state = initialState, action: AnyAction) => {
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
    case ProjectActionTypes.FETCH_PROJECTS_START:
      return {
        ...state,
        loading: false,
      };
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: payload,
      };
    default:
      return state;
  }
};
