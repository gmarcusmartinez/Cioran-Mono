import projects from 'api/projects';
import { takeEvery, put } from 'redux-saga/effects';
import { ProjectActionTypes } from 'store/actions/types';
import {
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from 'store/actions/projects/fetchProjects';

export function* fetchProjectsAsync() {
  try {
    const { data } = yield projects.get(`/`);
    yield put(fetchProjectsSuccess(data));
  } catch (error) {
    yield put(fetchProjectsFailure(error.message));
  }
}

export function* fetchProjectsStart() {
  yield takeEvery(ProjectActionTypes.FETCH_PROJECTS_START, fetchProjectsAsync);
}
