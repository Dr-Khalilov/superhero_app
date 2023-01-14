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
      data: {
        hero: { newHero },
      },
    } = yield API.createHero(hero);
    yield put(ActionCreators.createHeroSuccess({ hero: newHero }));
  } catch (error) {
    yield put(ActionCreators.createHeroError({ error }));
  }
}

export function * deleteHeroSaga (action) {
  try {
    const {
      payload: { id },
    } = action;
    const {
      data: { data },
    } = yield API.deleteHero({ id });
    yield put(ActionCreators.deleteHeroSuccess({ id }));
  } catch (error) {
    yield put(ActionCreators.deleteHeroError({ error }));
  }
}

export function * updateHeroSaga (action) {
  try {
    const {
      payload: { heroId, hero },
    } = action;
    const {
      data: {
        hero: { updatedHero },
      },
    } = yield API.updateHero({ heroId, hero });
    yield put(ActionCreators.updateHeroSuccess({ hero: updatedHero }));
  } catch (error) {
    yield put(ActionCreators.updateHeroError({ error }));
  }
}
