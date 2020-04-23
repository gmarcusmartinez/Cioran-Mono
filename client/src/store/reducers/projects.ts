import { Action, ActionTypes } from "../actions/types";

const initialState = {
  success: false,
  count: null,
  pagination: {},
  projects: [],
};

export const projects = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};
