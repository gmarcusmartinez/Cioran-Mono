import { ISprint, ITicket } from 'interfaces';
import { Action, ActionTypes } from 'store/actions/types';

export interface SprintState {
  loading: boolean;
  ticketPage: number;
  sprint: ISprint;
}

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
    case ActionTypes.ASSIGN_TICKET:
    case ActionTypes.SUBMIT_TICKET:
    case ActionTypes.MARK_TICKET_COMPLETE:
      return {
        ...state,
        sprint: {
          ...state.sprint,
          tickets: [
            action.payload,
            ...state.sprint.tickets.filter(
              (t: ITicket) => t._id !== action.payload._id
            ),
          ],
        },
      };
    default:
      return state;
  }
};
