import { FetchProjectsAction, CreateProjectAction } from './projects';
import { FetchSprintssAction } from './sprints';
import { FetchTicketsAction } from './tickets';

export enum ActionTypes {
  ADD_PROJECT = 'ADD_PROJECT',
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  FETCH_SPRINTS = 'FETCH_SPRINTS',
  FETCH_TICKETS = 'FETCH_TICKETS',
}
export type Action =
  | FetchProjectsAction
  | CreateProjectAction
  | FetchSprintssAction
  | FetchTicketsAction;
