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

export interface CreateProjectAction {
  type: ActionTypes.CREATE_PROJECT;
  payload: IProject;
}

export interface ICreateProjectFormState {
  title: string;
  slug: string;
}

export const createProject = (formData: ICreateProjectFormState) => async (
  dispatch: Dispatch
) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const res = await projects.post('/', formData, config);
  dispatch<CreateProjectAction>({
    type: ActionTypes.CREATE_PROJECT,
    payload: res.data,
  });
};
