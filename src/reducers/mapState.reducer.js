const initialState = {
  selectedCampground: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CAMPGROUND':
      return Object.assign({}, state, { selectedCampground: action.payload });
    default:
      return state;
  }
}