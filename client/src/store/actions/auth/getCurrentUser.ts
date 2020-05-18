import { Dispatch } from 'redux';
import auth from '../../../api/auth';
import { ActionTypes } from '../types';

export interface ICurrentUser {
  id: string;
  name: string;
  email: string;
}

export interface GetCurrentUserAction {
  type: ActionTypes.GET_CURRENT_USER;
  payload: ICurrentUser;
}
export const getCurrentUser = () => async (dispatch: Dispatch) => {
  const res = await auth.get('/currentUser');
  dispatch<GetCurrentUserAction>({
    type: ActionTypes.GET_CURRENT_USER,
    payload: res.data,
  });
};
