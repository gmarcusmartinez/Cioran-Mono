import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface ICurrentUser {
  currentUser: {
    id: string;
    name: string;
    email: string;
  };
}

export interface GetCurrentUserAction {
  type: ActionTypes.GET_CURRENT_USER;
  payload: ICurrentUser;
}
export const getCurrentUser = () => async (dispatch: Dispatch) => {
  const res = await axios.get('/api/auth/currentUser');
  dispatch<GetCurrentUserAction>({
    type: ActionTypes.GET_CURRENT_USER,
    payload: res.data,
  });
};

export interface SignoutAction {
  type: ActionTypes.SIGNOUT;
  payload: {
    currentUser: null;
  };
}
export const signout = () => async (dispatch: Dispatch) => {
  const res = await axios.post('/api/auth/signout');
  dispatch<SignoutAction>({
    type: ActionTypes.SIGNOUT,
    payload: res.data,
  });
};

const config = { headers: { 'Content-Type': 'application/json' } };

export interface SignupAction {
  type: ActionTypes.SIGNUP;
  payload: ICurrentUser;
}
export interface ISignupForm {
  name: string;
  email: string;
  password: string;
}
export const signup = (formData: ISignupForm) => async (dispatch: Dispatch) => {
  const res = await axios.post('/api/auth/signup', formData, config);
  dispatch<SignupAction>({
    type: ActionTypes.SIGNUP,
    payload: res.data,
  });
};

export interface SigninAction {
  type: ActionTypes.SIGNIN;
  payload: ICurrentUser;
}
export interface ISigninForm {
  email: string;
  password: string;
}
export const signin = (formData: ISigninForm) => async (dispatch: Dispatch) => {
  const res = await axios.post('/api/auth/signin', formData, config);
  dispatch<SigninAction>({
    type: ActionTypes.SIGNIN,
    payload: res.data,
  });
};
