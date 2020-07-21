import { Dispatch } from 'redux';
import tickets from 'api/tickets';
import { ITicket } from 'interfaces';
import { ActionTypes } from 'store/actions/types';

export interface AssignTicketAction {
  type: ActionTypes.ASSIGN_TICKET;
  payload: ITicket;
}
interface FormState {
  sprintId: string;
  projectId: string;
}

export const assignTicket = (formData: FormState, ticket_id: string) => async (
  dispatch: Dispatch
) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await tickets.put(`/${ticket_id}/assign`, formData, config);
    dispatch<AssignTicketAction>({
      type: ActionTypes.ASSIGN_TICKET,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
