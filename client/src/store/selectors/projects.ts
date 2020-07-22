import { createSelector } from 'reselect';
import { IState } from 'interfaces/state';

const selectProjectState = (state: IState) => state.projects;

export const selectProjectId = createSelector(
  [selectProjectState],
  (projects) => projects.project?._id
);

export const selectProject = createSelector(
  [selectProjectState],
  (projects) => projects.project
);

export const selectProjects = createSelector(
  [selectProjectState],
  (projects) => projects.projects
);
