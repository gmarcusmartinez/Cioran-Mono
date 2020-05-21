import projects from '../../../api/projects';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import { IProject } from './createProject';

export interface GetProjectsAction {
  type: ActionTypes.GET_PROJECTS;
  payload: IProject[];
}

export const getProjects = () => async (dispatch: Dispatch) => {
  const res = await projects.get(`/`);
  dispatch<GetProjectsAction>({
    type: ActionTypes.GET_PROJECTS,
    payload: res.data,
  });
};
