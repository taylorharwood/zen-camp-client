import { combineReducers } from 'redux';
import mapFilterOptionsReducer from './mapFilterOptions.reducer';
import mapStateReducer from './mapState.reducer';

export default combineReducers({
  mapFilterOptions: mapFilterOptionsReducer,
  mapState: mapStateReducer
});