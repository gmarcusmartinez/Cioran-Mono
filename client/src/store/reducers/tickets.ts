import { Action, ActionTypes } from '../actions/types';

const initialState = {
  loading: true,
  count: null,
  pagination: {},
  items: [],
};

export const tickets = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CREATE_TICKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
