import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Sprint {
  isActive: boolean;
  totalStoryPoints: number;
  _id: string;
  title: string;
  project: string;
  createdAt: Date;
  objective: string;
}

export interface FetchSprintsAction {
  type: ActionTypes.FETCH_SPRINTS;
  payload: {
    success: boolean;
    count: number;
    data: Sprint[];
  };
}

export const fetchSprints = (projectId: string) => async (
  dispatch: Dispatch
) => {
  const res = await axios.get(`/api/sprints?project=${projectId}`);
  dispatch<FetchSprintsAction>({
    type: ActionTypes.FETCH_SPRINTS,
    payload: res.data,
  });
};
