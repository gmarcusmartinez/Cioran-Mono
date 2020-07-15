import projects from 'api/projects';
import { ActionTypes } from '../types';
import { setAlert } from '../alerts/setAlert';

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
interface ErrorObj {
  message: string;
}
export const createProject = (formData: ICreateProjectFormState) => async (
  dispatch: any
) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await projects.post('/', formData, config);
    dispatch({
      type: ActionTypes.CREATE_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    errors.forEach((e: ErrorObj) => {
      dispatch(setAlert(e.message, 'fail'));
    });
  }
};
