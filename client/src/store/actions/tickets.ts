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
