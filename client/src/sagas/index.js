import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import {
  getHeroesSaga,
  createHeroSaga,
  deleteHeroSaga,
  updateHeroSaga,
} from './heroSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHeroSaga);
  yield takeLatest(ACTION_TYPES.GET_HERO_REQUEST, getHeroesSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_HERO_REQUEST, updateHeroSaga);
  yield takeLatest(ACTION_TYPES.DELETE_HERO_REQUEST, deleteHeroSaga);
}

export default rootSaga;
