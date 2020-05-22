import sprints from '../../../api/sprints';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';

export interface ITicket {
  _id: string;
  title: string;
  ticketType: string;
  status: string;
  storyPoints: number;
  priority: string;
  description: string;
  sprint: string;
  project: string;
  assignedTo: string;
  createdBy: string;
  dateAssigned: Date;
  dateCompleted: Date;
  createdAt: Date;
}
export interface CreateTicketAction {
  type: ActionTypes.CREATE_TICKET;
  payload: ITicket;
}

interface FormData {
  title: string;
  ticketType: string;
  storyPoints: number;
  description: string;
  priority: string;
}

export const createTicket = (formData: FormData, sprint_id: string) => async (
  dispatch: Dispatch
) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const res = await sprints.post(`/${sprint_id}/tickets`, formData, config);
  dispatch<CreateTicketAction>({
    type: ActionTypes.CREATE_TICKET,
    payload: res.data,
  });
};
