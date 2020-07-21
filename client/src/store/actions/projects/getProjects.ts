import { Dispatch } from 'redux';
import projects from 'api/projects';
import { IProject } from 'interfaces';
import { ActionTypes } from 'store/actions/types';

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
