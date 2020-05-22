import { Action, ActionTypes } from '../actions/types';

const initialState = {
  loading: true,
  ticket: null,
};

export const tickets = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_TICKET:
      return {
        loading: false,
        ticket: action.payload,
      };
    case ActionTypes.ASSIGN_TICKET:
      return {
        loading: false,
        ticket: action.payload,
      };
    default:
      return state;
  }
};
