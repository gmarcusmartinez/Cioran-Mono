import auth from 'api/auth';
import { ActionTypes } from '../types';
import history from 'core/history';
import { ICurrentUser } from './getCurrentUser';
import { setAlert, ErrorObj } from '../alerts/setAlert';

export interface SigninAction {
  type: ActionTypes.SIGNIN;
  payload: ICurrentUser;
}

export interface ISigninForm {
  email: string;
  password: string;
}
export const signin = (formData: ISigninForm) => async (dispatch: any) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const res = await auth.post('/signin', formData, config);
    dispatch({
      type: ActionTypes.SIGNIN,
      payload: res.data,
    });
    history.push('/dashboard/projects');
  } catch (err) {
    const errors = err.response.data.errors;
    errors.forEach((e: ErrorObj) => {
      dispatch(setAlert(e.message, 'fail'));
    });
  }
};
