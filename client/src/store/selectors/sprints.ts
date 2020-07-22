import { createSelector } from 'reselect';
import { IState } from 'interfaces/state';

const selectSprintState = (state: IState) => state.sprints;

export const selectSprint = createSelector(
  [selectSprintState],
  (sprints) => sprints.sprint
);

export const selectSprints = createSelector(
  [selectSprintState],
  (sprints) => sprints
);

export const selectSprintId = createSelector(
  [selectSprint],
  (sprint) => sprint._id
);

export const selectSprintTickets = createSelector(
  [selectSprint],
  (sprint) => sprint.tickets
);
