import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { getHeroesSaga } from './heroSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_HERO_REQUEST, getHeroesSaga);
}

export default rootSaga;
