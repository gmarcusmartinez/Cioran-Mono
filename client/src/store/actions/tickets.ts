import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ITicket {
  _id: string;
  sprint: string;
  title: string;
  type: string;
  status: string;
  description: string;
  isActive: boolean;
  storyPoints: number;
  dateAssigned: Date;
  dateCompleted: Date;
  createdAt: Date;
}

export interface FetchTicketsAction {
  type: ActionTypes.FETCH_TICKETS;
  payload: {
    success: boolean;
    count: number;
    data: ITicket[];
  };
}

export const fetchTickets = (sprintId: string) => async (
  dispatch: Dispatch
) => {
  const res = await axios.get(`/api/sprints/${sprintId}/tickets`);
  dispatch<FetchTicketsAction>({
    type: ActionTypes.FETCH_TICKETS,
    payload: res.data,
  });
};

export interface CreateTicketAction {
  type: ActionTypes.CREATE_TICKET;
  payload: ITicket;
}
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
interface CREATE_TICKET_FORM_DATA {
  title: string;
}
export const createTicket = (
  formData: CREATE_TICKET_FORM_DATA,
  sprint_id: string
) => async (dispatch: Dispatch) => {
  const res = await axios.post(
    `/api/sprints/${sprint_id}/tickets`,
    formData,
    config
  );
  dispatch<CreateTicketAction>({
    type: ActionTypes.CREATE_TICKET,
    payload: res.data,
  });
};
