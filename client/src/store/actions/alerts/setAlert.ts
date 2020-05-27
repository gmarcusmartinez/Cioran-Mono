import { v4 } from 'uuid';
import { Dispatch } from 'redux';
import { ActionTypes } from '../types';

export interface IAlert {
  id: string;
  message: string;
  field: string;
}

export interface SetAlertAction {
  type: ActionTypes.SET_ALERT;
  payload: IAlert;
}

export interface RemovetAlertAction {
  type: ActionTypes.REMOVE_ALERT;
  payload: string;
}

export const setAlert = (message: string) => (dispatch: Dispatch) => {
  const id = v4();
  dispatch({
    type: ActionTypes.SET_ALERT,
    payload: { message, id },
  });
  setTimeout(
    () =>
      dispatch({
        type: ActionTypes.REMOVE_ALERT,
        payload: id,
      }),
    3000
  );
};
