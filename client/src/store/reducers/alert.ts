import { IAlert } from 'interfaces';
import { Action, ActionTypes } from 'store/actions/types';

const initialState: IAlert[] = [];

export const alerts = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
