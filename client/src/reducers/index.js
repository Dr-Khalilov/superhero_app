import { combineReducers } from 'redux';
import hero from './heroReducer';

const rootReducer = combineReducers({
  hero,
});

export default rootReducer;
