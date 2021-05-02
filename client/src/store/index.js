import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

const sagaMW = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMW));

sagaMW.run(rootSaga);

export default store;
