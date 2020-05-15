import { FetchProjectsAction, CreateProjectAction } from './projects';
import { FetchSprintsAction } from './sprints';
import { FetchTicketsAction, CreateTicketAction } from './tickets';
import { SetAlertAction, RemovetAlertAction } from './alerts';
import {
  GetCurrentUserAction,
  SignoutAction,
  SignupAction,
  SigninAction,
} from './auth';

export enum ActionTypes {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT',
  GET_CURRENT_USER = 'GET_CURRENT_USER',
  SIGNUP = 'SIGNUP',
  SIGNIN = 'SIGNIN',
  SIGNOUT = 'SIGNOUT',
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
  | CreateTicketAction
  | SetAlertAction
  | RemovetAlertAction
  | GetCurrentUserAction
  | SignoutAction
  | SignupAction
  | SigninAction;
