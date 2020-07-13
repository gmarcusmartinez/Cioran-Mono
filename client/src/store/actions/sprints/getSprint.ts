import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import sprints from '../../../api/sprints';

export interface ISprint {
  _id: string;
  title: string;
  totalStoryPoints: number;
  project: string;
  createdAt: Date;
  tickets: [];
  startDate: Date;
  endDate: Date;
}

export interface GetSprintAction {
  type: ActionTypes.GET_SPRINT;
  payload: ISprint;
}

export const getSprint = (projectId: string, _id: string) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await sprints.get(`/${projectId}/${_id}`);
    dispatch<GetSprintAction>({
      type: ActionTypes.GET_SPRINT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export interface SetCurrentPageAction {
  type: ActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

export const setCurrentPage = (num: number) => ({
  type: ActionTypes.SET_CURRENT_PAGE,
  payload: num,
});
