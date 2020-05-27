import { Action, ActionTypes } from '../actions/types';
const initialState = {
  loading: true,
  ticketPage: 1,
  sprint:
    {
      tickets: [],
    } || null,
};

export const sprints = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_SPRINT:
      return {
        ...state,
        loading: false,
        sprint: action.payload,
        ticketPage: 1,
      };
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        ticketPage: action.payload,
      };
    case ActionTypes.CREATE_TICKET:
      return {
        ...state,
        sprint: {
          ...state.sprint,
          tickets: [...state.sprint.tickets, action.payload],
        },
      };
    default:
      return state;
  }
};
