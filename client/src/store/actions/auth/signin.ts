import { Dispatch } from 'redux';
import auth from '../../../api/auth';
import { ActionTypes } from '../types';
import history from '../../../core/history';
import { ICurrentUser } from './getCurrentUser';

export interface SigninAction {
  type: ActionTypes.SIGNIN;
  payload: ICurrentUser;
}

export interface ISigninForm {
  email: string;
  password: string;
}
export const signin = (formData: ISigninForm) => async (dispatch: Dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const res = await auth.post('/signin', formData, config);
    dispatch<SigninAction>({
      type: ActionTypes.SIGNIN,
      payload: res.data,
    });
    history.push('/dashboard/projects');
  } catch (err) {
    const { errors } = err.response.data;
    console.log(errors);
  }
};
