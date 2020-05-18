import { Dispatch } from 'redux';
import auth from '../../../api/auth';
import { ActionTypes } from '../types';
import history from '../../../core/history';
import { ICurrentUser } from './getCurrentUser';

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
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const res = await auth.post('/signup', formData, config);
    dispatch<SignupAction>({
      type: ActionTypes.SIGNUP,
      payload: res.data,
    });
    history.push('/dashboard');
  } catch (err) {
    const { errors } = err.response.data;
    console.log(errors);
  }
};
