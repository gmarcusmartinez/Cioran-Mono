import auth from 'api/auth';
import { ActionTypes } from '../types';
import history from 'core/history';
import { setAlert, ErrorObj } from '../alerts/setAlert';
import { IUser } from 'interfaces';

export interface SigninAction {
  type: ActionTypes.SIGNIN;
  payload: IUser;
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
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    errors.forEach((e: ErrorObj) => {
      dispatch(setAlert(e.message, 'fail'));
    });
  }
};
