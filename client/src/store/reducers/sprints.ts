import { Action, ActionTypes } from '../actions/types';

const initialState = {
  loading: false,
  count: null,
  pagination: {},
  items: [],
};

export const sprints = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SPRINTS:
      return {
        ...state,
        count: action.payload.count,
        items: action.payload.data,
      };
    default:
      return state;
  }
};
