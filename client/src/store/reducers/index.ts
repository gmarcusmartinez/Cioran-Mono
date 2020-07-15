import { combineReducers } from 'redux';
import { alerts } from './alert';
import { auth } from './auth';
import { modal } from './modal';
import { projects } from './projects';
import { sprints } from './sprints';
import { tickets } from './tickets';

export const rootReducer = combineReducers({
  alerts,
  auth,
  modal,
  projects,
  sprints,
  tickets,
});
