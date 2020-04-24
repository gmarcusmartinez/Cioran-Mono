import { Action, ActionTypes } from "../actions/types";

const initialState = {
  loading: false,
  count: null,
  pagination: {},
  items: [],
};

export const projects = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS:
      return {
        ...state,
        count: action.payload.count,
        items: action.payload.data,
      };
    default:
      return state;
  }
};
