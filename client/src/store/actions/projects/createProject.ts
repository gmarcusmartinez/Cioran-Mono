import projects from 'api/projects';
import { IProject } from 'interfaces';
import { ActionTypes } from 'store/actions/types';
import { setAlert, ErrorObj } from 'store/actions/alerts/setAlert';

export interface CreateProjectAction {
  type: ActionTypes.CREATE_PROJECT;
  payload: IProject;
}

export interface ICreateProjectFormState {
  title: string;
  slug: string;
}

export const createProject = (formData: ICreateProjectFormState) => async (
  dispatch: any
) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await projects.post('/', formData, config);
    dispatch({
      type: ActionTypes.CREATE_PROJECT,
      payload: data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    errors.forEach((e: ErrorObj) => {
      dispatch(setAlert(e.message, 'fail'));
    });
  }
};
