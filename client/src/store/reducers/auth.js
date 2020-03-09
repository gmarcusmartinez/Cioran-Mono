import { SIGNUP, SIGNUP_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case SIGNUP_FAIL:
      localStorage.removeItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
}
