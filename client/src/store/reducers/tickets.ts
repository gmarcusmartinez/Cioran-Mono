import { Action, ActionTypes } from '../actions/types';

const initialState = {
  loading: true,
  count: null,
  pagination: {},
  items: [],
};

export const tickets = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TICKETS:
      return {
        ...state,
        loading: false,
        count: action.payload.count,
        items: action.payload.data,
      };
    case ActionTypes.CREATE_TICKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
