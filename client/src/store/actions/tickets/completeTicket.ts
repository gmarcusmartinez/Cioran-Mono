import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import { ITicket } from './createTicket';
import tickets from '../../../api/tickets';

export interface MarkTicketCompleteAction {
  type: ActionTypes.MARK_TICKET_COMPLETE;
  payload: ITicket;
}

interface FormState {
  sprintId: string;
  projectId: string;
}

export const completeTicket = (
  formData: FormState,
  ticket_id: string
) => async (dispatch: Dispatch) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await tickets.put(`/${ticket_id}/complete`, formData, config);
    dispatch<MarkTicketCompleteAction>({
      type: ActionTypes.MARK_TICKET_COMPLETE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
