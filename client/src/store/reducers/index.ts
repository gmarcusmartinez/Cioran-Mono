import { combineReducers } from 'redux';
import { projects } from './projects';
import { sprints } from './sprints';

export const rootReducer = combineReducers({
  projects,
  sprints,
});
