import sprints from '../../../api/sprints';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';

export interface ISprint {
  _id: string;
  title: string;
  totalStoryPoints: number;
  project: string;
  createdAt: Date;
  tickets: [];
}

export interface GetSprintAction {
  type: ActionTypes.GET_SPRINT;
  payload: ISprint;
}

export const getSprint = (id: string) => async (dispatch: Dispatch) => {
  const res = await sprints.get(`/${id}`);
  dispatch<GetSprintAction>({
    type: ActionTypes.GET_SPRINT,
    payload: res.data,
  });
};
