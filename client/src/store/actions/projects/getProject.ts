import projects from '../../../api/projects';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import { IProject } from './createProject';

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
