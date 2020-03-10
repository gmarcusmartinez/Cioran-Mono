import axios from "axios";
import { SIGNUP, SIGNUP_FAIL } from "./types";

export const signup = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      body,
      config
    );
    dispatch({
      type: SIGNUP,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL
    });
  }
  return { type: SIGNUP };
};
