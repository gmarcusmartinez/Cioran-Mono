import projects from '../../../api/projects';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';

export interface IProject {
  _id: string;
  title: string;
  photo: string;
  slug: string;
  projectOwner: string;
  sprints: any[];
  team: any[];
}
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
