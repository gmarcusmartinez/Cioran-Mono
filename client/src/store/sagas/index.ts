import { all, call } from 'redux-saga/effects';
import {
  fetchProjectsStart,
  fetchProjectStart,
  createProjectStart,
} from 'store/sagas/projects';

export default function* rootSaga() {
  yield all([
    call(fetchProjectStart),
    call(fetchProjectsStart),
    call(createProjectStart),
  ]);
}
