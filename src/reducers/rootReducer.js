import { combineReducers } from 'redux';
import mapFilterOptionsReducer from './mapFilterOptions.reducer';

export default combineReducers({
  mapFilterOptions: mapFilterOptionsReducer
});