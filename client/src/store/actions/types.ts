import { FetchProjectsAction, CreateProjectAction } from './projects';
import { FetchSprintsAction } from './sprints';
import { FetchTicketsAction, CreateTicketAction } from './tickets';

export enum ActionTypes {
  ADD_PROJECT = 'ADD_PROJECT',
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  FETCH_SPRINTS = 'FETCH_SPRINTS',
  FETCH_TICKETS = 'FETCH_TICKETS',
  CREATE_TICKET = 'CREATE_TICKET',
}
export type Action =
  | FetchProjectsAction
  | CreateProjectAction
  | FetchSprintsAction
  | FetchTicketsAction
  | CreateTicketAction;
