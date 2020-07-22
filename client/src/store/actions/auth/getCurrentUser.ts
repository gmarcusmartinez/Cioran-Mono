import { Dispatch } from 'redux';
import auth from 'api/auth';
import { ActionTypes } from '../types';
import { IUser } from 'interfaces';

export interface GetCurrentUserAction {
  type: ActionTypes.GET_CURRENT_USER;
  payload: IUser;
}
export const getCurrentUser = () => async (dispatch: Dispatch) => {
  const res = await auth.get('/currentUser');
  dispatch<GetCurrentUserAction>({
    type: ActionTypes.GET_CURRENT_USER,
    payload: res.data,
  });
};
