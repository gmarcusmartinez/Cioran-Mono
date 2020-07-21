import { Dispatch } from 'redux';
import tickets from 'api/tickets';
import { ITicket } from 'interfaces';
import { ActionTypes } from 'store/actions/types';

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
