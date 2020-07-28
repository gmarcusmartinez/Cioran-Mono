import projects from 'api/projects';
import { takeLatest, put } from 'redux-saga/effects';
import { ProjectActionTypes } from 'store/actions/types';
import * as fetchProject from 'store/actions/projects/fetchProject';
import * as fetchProjects from 'store/actions/projects/fetchProjects';
import * as createProject from 'store/actions/projects/createProject';

export function* createProjectStart() {
  yield takeLatest(ProjectActionTypes.CREATE_PROJECT_START, createProjectAsync);
}
export function* createProjectAsync({ payload }: any) {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const { data } = yield projects.post('/', payload, config);
    yield put(createProject.success(data));
  } catch (error) {
    yield put(createProject.failure(error.message));
  }
}

export function* fetchProjectsStart() {
  yield takeLatest(ProjectActionTypes.FETCH_PROJECTS_START, fetchProjectsAsync);
}
export function* fetchProjectsAsync() {
  try {
    const { data } = yield projects.get(`/`);
    yield put(fetchProjects.success(data));
  } catch (error) {
    yield put(fetchProjects.failure(error.message));
  }
}

export function* fetchProjectStart() {
  yield takeLatest(ProjectActionTypes.FETCH_PROJECT_START, fetchProjectAsync);
}
export function* fetchProjectAsync({ payload }: any) {
  try {
    const { data } = yield projects.get(`/${payload}`);
    yield put(fetchProject.success(data));
  } catch (error) {
    yield put(fetchProject.failure(error.message));
  }
}
