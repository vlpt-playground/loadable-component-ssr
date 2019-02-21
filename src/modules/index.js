import { combineReducers } from 'redux';
import animals from './animals';
import ignore from './ignore';

const rootReducer = combineReducers({
  animals,
  ignore
});

export default rootReducer;
