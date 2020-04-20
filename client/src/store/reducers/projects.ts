import { Project } from "../actions";
import { Action, ActionTypes } from "../actions/types";

export const projects = (state: Project[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};
