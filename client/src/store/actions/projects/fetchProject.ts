import { IProject } from 'interfaces';
import { ProjectActionTypes } from 'store/actions/types';

export const fetchProjectStart = (id: string) => ({
  type: ProjectActionTypes.FETCH_PROJECT_START,
  payload: id,
});
export const success = (data: IProject) => ({
  type: ProjectActionTypes.FETCH_PROJECT_SUCCESS,
  payload: data,
});
export const failure = (message: string) => ({
  type: ProjectActionTypes.FETCH_PROJECT_FAILURE,
  payload: message,
});
