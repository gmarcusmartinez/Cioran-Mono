import { Action, ActionTypes } from '../actions/types';
const initialState = {
  loading: true,
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
        currentPage: 1,
        sprint: action.payload,
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
