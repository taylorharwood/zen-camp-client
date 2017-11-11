import { SITE_TYPES, AMENITY_TYPES, MAX_PEOPLE, WATERFRONT_TYPES } from '../constants/constants';

const initialState = {
  address: '',
  latitude: '',
  longitude: '',
  siteType: '2003',
  amenity: '4001',
  maxPeople: 1,
  waterfront: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return Object.assign({}, state, { address: action.payload });
    case 'SET_LATITUDE':
      return Object.assign({}, state, { latitude: action.payload });
    case 'SET_LONGITUDE':
      return Object.assign({}, state, { longitude: action.payload });
    case 'SET_SITE_TYPE':
      return Object.assign({}, state, { siteType: action.payload }); 
    case 'SET_AMENITY':
      return Object.assign({}, state, { amenity: action.payload }); 
    case 'SET_MAX_PEOPLE':
      return Object.assign({}, state, { maxPeople: action.payload }); 
    case 'SET_WATERFRONT':
      return Object.assign({}, state, { waterfront: action.payload }); 
    default:
      return state;
  }
}