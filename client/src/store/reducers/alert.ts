import { Action, ActionTypes } from '../actions/types';

const initialState: any[] = [];

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
