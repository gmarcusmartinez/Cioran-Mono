import { createSelector } from 'reselect';
import { IState } from 'interfaces/state';

const selectAlertState = (state: IState) => state.alerts;

export const selectAlerts = createSelector(
  [selectAlertState],
  (alerts) => alerts
);
