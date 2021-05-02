import produce from 'immer';
import ACTION_TYPES from '../actions/types';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null,
};

const handlers = {
  [ACTION_TYPES.GET_HERO_REQUEST]: produce((draft, action) => {
    draft.isFetching = true;
  }),
  [ACTION_TYPES.GET_HERO_SUCCESS]: produce((draft, action) => {
    const {
      payload: { heroes },
    } = action;
    draft.isFetching = false;
    draft.heroes.push(...heroes);
  }),
  [ACTION_TYPES.GET_HERO_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;
    draft.isFetching = false;
    draft.error = error;
  }),
  [ACTION_TYPES.CREATE_HERO_REQUEST]: produce((draft, action) => {
    draft.isFetching = true;
  }),
  [ACTION_TYPES.CREATE_HERO_SUCCESS]: produce((draft, action) => {
    const {
      payload: { hero },
    } = action;
    draft.isFetching = false;
    draft.heroes.push(hero);
  }),
  [ACTION_TYPES.CREATE_HERO_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;
    draft.isFetching = false;
    draft.error = error;
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
