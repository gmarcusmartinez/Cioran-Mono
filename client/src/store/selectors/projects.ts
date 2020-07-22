import { createSelector } from 'reselect';
import { IState } from 'interfaces/state';

const selectProjectState = (state: IState) => state.projects;

export const selectProjects = createSelector(
  [selectProjectState],
  (projects) => projects.projects
);
