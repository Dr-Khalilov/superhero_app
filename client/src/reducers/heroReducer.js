import produce from 'immer';
import ACTION_TYPES from '../actions/types';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null,
};

const handlers = {
  [ACTION_TYPES.GET_HERO_REQUEST]: produce(draft => {
    draft.isFetching = true;
  }),
  [ACTION_TYPES.GET_HERO_SUCCESS]: produce((draft, action) => {
    const {
      payload: { heroes },
    } = action;
    draft.heroes.push(...heroes);
    draft.isFetching = false;
  }),
  [ACTION_TYPES.GET_HERO_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;
    draft.error = error;
    draft.isFetching = false;
  }),
  [ACTION_TYPES.CREATE_HERO_REQUEST]: produce(draft => {
    draft.isFetching = true;
  }),
  [ACTION_TYPES.CREATE_HERO_SUCCESS]: produce((draft, action) => {
    const {
      payload: { hero },
    } = action;
    draft.heroes.push(hero);
    draft.isFetching = false;
  }),
  [ACTION_TYPES.CREATE_HERO_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;
    draft.error = error;
    draft.isFetching = false;
  }),
  [ACTION_TYPES.DELETE_HERO_REQUEST]: produce(draft => {
    draft.isFetching = true;
  }),

  [ACTION_TYPES.DELETE_HERO_SUCCESS]: produce((draft, action) => {
    const {
      payload: { id },
    } = action;
    draft.isFetching = false;
    draft.heroes = draft.heroes.filter(hero => hero.id !== id);
  }),
  [ACTION_TYPES.DELETE_HERO_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;
    draft.error = error;
    draft.isFetching = false;
  }),

  [ACTION_TYPES.CLEAR_HERO_ERROR]: produce(draft => {
    draft.error = null;
  }),
};

function heroReducer (state = initialState, action) {
  const { type } = action;
  if (handlers[type]) {
    return handlers[type](state, action);
  }
  return state;
}

export default heroReducer;
