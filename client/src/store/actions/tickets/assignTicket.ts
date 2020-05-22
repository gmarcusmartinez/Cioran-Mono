import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import { ITicket } from './createTicket';
import tickets from '../../../api/tickets';

export interface AssignTicketAction {
  type: ActionTypes.ASSIGN_TICKET;
  payload: ITicket;
}
interface FormState {
  sprint: string;
  project: string;
}

export const assignTicket = (formData: FormState, ticket_id: string) => async (
  dispatch: Dispatch
) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const res = await tickets.put(`/${ticket_id}/assign`, formData, config);
  dispatch<AssignTicketAction>({
    type: ActionTypes.ASSIGN_TICKET,
    payload: res.data,
  });
};
