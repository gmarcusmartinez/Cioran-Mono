import {
  SetAlertAction,
  RemovetAlertAction,
  GetCurrentUserAction,
  SignupAction,
  SignoutAction,
  SigninAction,
  GetProjectAction,
  CreateProjectAction,
  GetSprintAction,
  SetCurrentPageAction,
  CreateTicketAction,
  GetTicketAction,
  AssignTicketAction,
  SubmitTicketAction,
  MarkTicketCompleteAction,
} from './';

export enum ProjectActionTypes {
  FETCH_PROJECTS_START = 'FETCH_PROJECTS_START',
  FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS',
  FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE',
}

export enum ActionTypes {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT',
  GET_CURRENT_USER = 'GET_CURRENT_USER',
  SIGNUP = 'SIGNUP',
  SIGNIN = 'SIGNIN',
  SIGNOUT = 'SIGNOUT',
  CREATE_PROJECT = 'CREATE_PROJECT',
  GET_PROJECT = 'GET_PROJECT',
  GET_SPRINT = 'GET_SPRINT',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  CREATE_TICKET = 'CREATE_TICKET',
  GET_TICKET = 'GET_TICKET',
  ASSIGN_TICKET = 'ASSIGN_TICKET',
  SUBMIT_TICKET = 'SUBMIT_TICKET',
  MARK_TICKET_COMPLETE = 'MARK_TICKET_COMPLETE',
}
export type Action =
  | SignoutAction
  | SignupAction
  | SigninAction
  | GetProjectAction
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
  | SubmitTicketAction
  | MarkTicketCompleteAction;
