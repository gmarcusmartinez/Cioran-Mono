import { IProject } from 'interfaces';
import { ProjectActionTypes } from 'store/actions/types';

export const fetchProjectsStart = () => ({
  type: ProjectActionTypes.FETCH_PROJECTS_START,
});
export const success = (data: IProject[]) => ({
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
  payload: data,
});
export const failure = (message: string) => ({
  type: ProjectActionTypes.FETCH_PROJECTS_FAILURE,
  payload: message,
});
