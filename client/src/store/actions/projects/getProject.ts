import { Dispatch } from 'redux';
import projects from 'api/projects';
import { IProject } from 'interfaces';
import { ActionTypes } from 'store/actions/types';

export interface GetProjectAction {
  type: ActionTypes.GET_PROJECT;
  payload: IProject;
}

export const getProject = (id: string) => async (dispatch: Dispatch) => {
  const res = await projects.get(`/${id}`);
  dispatch<GetProjectAction>({
    type: ActionTypes.GET_PROJECT,
    payload: res.data,
  });
};
