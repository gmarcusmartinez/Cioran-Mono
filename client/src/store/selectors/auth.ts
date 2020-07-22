import { createSelector } from 'reselect';
import { IState } from 'interfaces/state';

const selectAuthState = (state: IState) => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuthState],
  (auth) => auth.currentUser
);
