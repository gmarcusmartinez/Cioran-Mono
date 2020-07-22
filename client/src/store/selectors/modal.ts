import { createSelector } from 'reselect';
import { IState } from 'interfaces/state';

const selectModalState = (state: IState) => state.modal;

export const selectDisplayModal = createSelector(
  [selectModalState],
  (modal) => modal.displayModal
);
export const selectComponent = createSelector(
  [selectModalState],
  (modal) => modal.component
);
