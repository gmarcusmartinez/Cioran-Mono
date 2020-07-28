import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'store/reducers';
import { fetchProjectsStart } from 'store/sagas/projects';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(fetchProjectsStart);
export default store;
