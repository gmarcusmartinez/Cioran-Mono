import { Dispatch } from 'redux';
import { ITicket, ISprint } from 'interfaces';
import { ActionTypes } from 'store/actions/types';

export interface GetTicketAction {
  type: ActionTypes.GET_TICKET;
  payload?: ITicket;
}

export const getTicket = (sprint: ISprint, id: string) => (
  dispatch: Dispatch
) => {
  try {
    const ticket = sprint.tickets.find((t: ITicket) => t._id === id);
    dispatch<GetTicketAction>({
      type: ActionTypes.GET_TICKET,
      payload: ticket,
    });
  } catch (err) {
    console.log(err.message);
  }
};
