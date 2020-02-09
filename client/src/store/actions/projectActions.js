import axios from "axios";
import { GET_PROJECTS } from "./types";

export const getProjects = () => async dispatch => {
  axios.get("/api/projects");
};
