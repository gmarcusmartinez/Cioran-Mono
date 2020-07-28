// import { setAlert, ErrorObj } from 'store/actions/alerts/setAlert';
import { IProject } from 'interfaces';
import { ProjectActionTypes } from 'store/actions/types';

export interface ICreateProjectFormState {
  title: string;
  slug: string;
}
export const createProjectStart = (formData: ICreateProjectFormState) => ({
  type: ProjectActionTypes.CREATE_PROJECT_START,
  payload: formData,
});
export const success = (data: IProject) => ({
  type: ProjectActionTypes.CREATE_PROJECT_SUCCESS,
  payload: data,
});
export const failure = (message: string) => ({
  type: ProjectActionTypes.CREATE_PROJECT_FAILURE,
  payload: message,
});

// const errors = err.response.data.errors;
// errors.forEach((e: ErrorObj) => {
//   dispatch(setAlert(e.message, 'fail'));
// });
