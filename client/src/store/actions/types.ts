import {
  SetAlertAction,
  RemovetAlertAction,
  GetCurrentUserAction,
  SignupAction,
  SignoutAction,
  SigninAction,
  GetProjectAction,
  GetProjectsAction,
  CreateProjectAction,
  GetSprintAction,
  SetCurrentPageAction,
  CreateTicketAction,
  GetTicketAction,
  AssignTicketAction,
  SubmitTicketAction,
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
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  CREATE_TICKET = 'CREATE_TICKET',
  GET_TICKET = 'GET_TICKET',
  ASSIGN_TICKET = 'ASSIGN_TICKET',
  SUBMIT_TICKET = 'SUBMIT_TICKET',
}
export type Action =
  | SignoutAction
  | SignupAction
  | SigninAction
  | GetProjectAction
  | GetProjectsAction
  | CreateProjectAction
  | CreateProjectAction
  | GetSprintAction
  | SetCurrentPageAction
  | CreateTicketAction
  | SetAlertAction
  | RemovetAlertAction
  | GetCurrentUserAction
  | GetTicketAction
  | AssignTicketAction
  | SubmitTicketAction;
