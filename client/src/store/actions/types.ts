import { FetchProjectsAction, AddProjectAction } from './projects';
import { FetchSprintssAction } from './sprints';

export enum ActionTypes {
  ADD_PROJECT = 'ADD_PROJECT',
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  FETCH_SPRINTS = 'FETCH_SPRINTS',
}
export type Action =
  | FetchProjectsAction
  | AddProjectAction
  | FetchSprintssAction;
