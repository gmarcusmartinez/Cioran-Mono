import { Dispatch } from 'redux';
import sprints from 'api/sprints';
import { ISprint } from 'interfaces';
import { ActionTypes } from 'store/actions/types';

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
