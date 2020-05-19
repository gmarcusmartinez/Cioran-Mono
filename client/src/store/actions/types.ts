import { SetAlertAction, RemovetAlertAction } from './alerts';
import {
  GetCurrentUserAction,
  SignupAction,
  SignoutAction,
  SigninAction,
  GetProjectAction,
  CreateProjectAction,
  GetSprintAction,
  CreateTicketAction,
} from './';

export enum ActionTypes {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT',
  GET_CURRENT_USER = 'GET_CURRENT_USER',
  SIGNUP = 'SIGNUP',
  SIGNIN = 'SIGNIN',
  SIGNOUT = 'SIGNOUT',
  CREATE_PROJECT = 'CREATE_PROJECT',
  GET_PROJECT = 'GET_PROJECT',
  GET_PROJECTS = 'GET_PROJECTS',
  GET_SPRINT = 'GET_SPRINT',
  CREATE_TICKET = 'CREATE_TICKET',
}
export type Action =
  | SignoutAction
  | SignupAction
  | SigninAction
  | GetProjectAction
  | CreateProjectAction
  | CreateProjectAction
  | GetSprintAction
  | CreateTicketAction
  | SetAlertAction
  | RemovetAlertAction
  | GetCurrentUserAction;
