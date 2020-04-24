import { FetchProjectsAction, AddProjectAction } from "./projects";

export enum ActionTypes {
  FETCH_PROJECTS = "FETCH_PROJECTS",
  ADD_PROJECT = "ADD_PROJECT",
}
export type Action = FetchProjectsAction | AddProjectAction;
