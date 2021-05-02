import ACTION_TYPES from '../actions/types';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null,
};

const handlers = {
  []:()=>{
    
  }
}

function heroReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_HERO_SUCCESS: {
      const {
        payload: { heroes },
      } = action;
      return {
        ...state,
        isFetching: false,
        heroes: [...state.heroes, ...heroes],
      };
    }
    case ACTION_TYPES.GET_HERO_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      const {
        payload: { hero },
      } = action;
      return {
        ...state,
        isFetching: false,
        heroes: [...state.hero, ...hero],
      };
    }
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.UPDATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.UPDATE_HERO_SUCCESS: {
      const {
        payload: { heroes },
      } = action;
      return {
        ...state,
        isFetching: false,
        heroes: [...state.heroes, ...heroes],
      };
    }
    case ACTION_TYPES.UPDATE_HERO_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.DELETE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.DELETE_HERO_SUCCESS: {
      const {
        payload: { heroes },
      } = action;
      return {
        ...state,
        isFetching: false,
        heroes: [...state.heroes, ...heroes],
      };
    }
    case ACTION_TYPES.DELETE_HERO_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default heroReducer;
