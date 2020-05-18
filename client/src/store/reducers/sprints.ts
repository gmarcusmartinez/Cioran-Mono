import { Action, ActionTypes } from '../actions/types';

const initialState = {
  loading: true,
  sprint: null,
};

export const sprints = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_SPRINT:
      return {
        ...state,
        loading: false,
        sprint: action.payload,
      };
    default:
      return state;
  }
};
