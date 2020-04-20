import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Project {
  _id: string;
  title: string;
}
export interface FetchProjectsAction {
  type: ActionTypes.FETCH_PROJECTS;
  payload: Project[];
}

export const fetchProjects = () => async (dispatch: Dispatch) => {
  // const res = await axios.get<Project[]>(url);
  // dispatch<FetchProjectsAction>({
  //   type: ActionTypes.FETCH_PROJECTS,
  //   payload: res.data,
  // });
  dispatch({
    type: ActionTypes.FETCH_PROJECTS,
  });
};
