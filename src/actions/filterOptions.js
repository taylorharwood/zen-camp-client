import { createAction } from 'redux-actions';

// todo use constants for action names
export const setAddress = createAction('SET_ADDRESS');
export const setLatitude = createAction('SET_LATITUDE');
export const setLongitude = createAction('SET_LONGITUDE');
export const setSiteType = createAction('SET_SITE_TYPE');
export const setAmenity = createAction('SET_AMENITY');
export const setMaxPeople = createAction('SET_MAX_PEOPLE');
export const setWaterfront = createAction('SET_WATERFRONT');
