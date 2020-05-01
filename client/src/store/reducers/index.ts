import { combineReducers } from 'redux';
import { projects } from './projects';
import { sprints } from './sprints';
import { tickets } from './tickets';

export const rootReducer = combineReducers({
  projects,
  sprints,
  tickets,
});
