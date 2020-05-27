import { Dispatch } from 'redux';
import auth from '../../../api/auth';
import { ActionTypes } from '../types';
import history from '../../../core/history';

export interface SignoutAction {
  type: ActionTypes.SIGNOUT;
  payload: null;
}
export const signout = () => async (dispatch: Dispatch) => {
  const res = await auth.post('/signout');
  dispatch<SignoutAction>({
    type: ActionTypes.SIGNOUT,
    payload: res.data,
  });
  history.push('/');
};
