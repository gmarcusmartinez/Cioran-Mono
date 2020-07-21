import { Dispatch } from 'redux';
import sprints from 'api/sprints';
import { ITicket } from 'interfaces';
import { ActionTypes } from 'store/actions/types';

export interface CreateTicketAction {
  type: ActionTypes.CREATE_TICKET;
  payload: ITicket;
}

export interface FormState {
  title: string;
  ticketType: string;
  storyPoints: number;
  description: string;
  priority: string;
  project_id: string;
}

export const createTicket = (formData: FormState, sprint_id: string) => async (
  dispatch: Dispatch
) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const res = await sprints.post(`/${sprint_id}/tickets`, formData, config);
  console.log(res.data);
  dispatch<CreateTicketAction>({
    type: ActionTypes.CREATE_TICKET,
    payload: res.data,
  });
};
