import { IProject } from 'interfaces';
import { ProjectActionTypes } from 'store/actions/types';

export const fetchProjectsStart = () => ({
  type: ProjectActionTypes.FETCH_PROJECTS_START,
});

export const fetchProjectsSuccess = (data: IProject[]) => ({
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
  payload: data,
});
export const fetchProjectsFailure = (message: string) => ({
  type: ProjectActionTypes.FETCH_PROJECTS_FAILURE,
  payload: message,
});
