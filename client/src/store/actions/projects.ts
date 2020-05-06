import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Project {
  _id: string;
  title: string;
  photo: string;
}
export interface FetchProjectsAction {
  type: ActionTypes.FETCH_PROJECTS;
  payload: {
    success: boolean;
    count: number;
    pagination: {};
    data: Project[];
  };
}
export interface CreateProjectAction {
  type: ActionTypes.ADD_PROJECT;
  payload: Project;
}

export const fetchProjects = () => async (dispatch: Dispatch) => {
  const res = await axios.get('/api/projects');
  dispatch<FetchProjectsAction>({
    type: ActionTypes.FETCH_PROJECTS,
    payload: res.data,
  });
};

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
interface IFormData {
  title: string;
}
export const createProject = (formData: IFormData) => async (
  dispatch: Dispatch
) => {
  const res = await axios.post('/api/projects', formData, config);
  dispatch<CreateProjectAction>({
    type: ActionTypes.ADD_PROJECT,
    payload: res.data,
  });
};
