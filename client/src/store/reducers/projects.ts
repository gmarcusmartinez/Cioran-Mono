import { AnyAction } from 'redux';
import { ProjectActionTypes } from 'store/actions/types';

const initialState = {
  loading: true,
  project: null,
  projects: [],
  error: '',
};

export const projects = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case ProjectActionTypes.CREATE_PROJECT_START:
    case ProjectActionTypes.FETCH_PROJECT_START:
    case ProjectActionTypes.FETCH_PROJECTS_START:
      return {
        ...state,
        loading: true,
      };
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, payload],
      };
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: payload,
      };
    case ProjectActionTypes.FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project: payload,
      };
    default:
      return state;
  }
};
