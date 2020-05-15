import { combineReducers } from 'redux';
import { alerts } from './alert';
import { projects } from './projects';
import { sprints } from './sprints';
import { tickets } from './tickets';
import { auth } from './auth';

export const rootReducer = combineReducers({
  auth,
  alerts,
  projects,
  sprints,
  tickets,
});
