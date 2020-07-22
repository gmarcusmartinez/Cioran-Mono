import { Dispatch } from 'redux';
import auth from 'api/auth';
import history from 'core/history';
import { IUser } from 'interfaces';
import { ActionTypes } from 'store/actions/types';
import { setAlert } from 'store/actions/alerts/setAlert';

export interface SignupAction {
  type: ActionTypes.SIGNUP;
  payload: IUser;
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
    if (errors) {
      errors.forEach((e: { message: string }) => {
        setAlert(e.message, 'fail');
      });
    }
  }
};
