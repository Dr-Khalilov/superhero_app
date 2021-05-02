import { put } from 'redux-saga/effects';
import * as ActionCreators from '../actions';
import * as API from '../api';

export function * getHeroesSaga (action) {
  try {
    const {
      data: { data: heroes },
    } = yield API.getHeroes();
    yield put(ActionCreators.getHeroesSuccess({ heroes }));
  } catch (error) {
    yield put(ActionCreators.getHeroesError({ error }));
  }
}

export function * createHeroSaga (action) {
  try {
    const {
      payload: { hero },
    } = action;
    const {
      data: { data: newHero },
    } = yield API.createHero(...hero);
    yield put(ActionCreators.createHeroSuccess({ newHero }));
  } catch (error) {
    yield put(ActionCreators.createHeroError({ error }));
  }
}
