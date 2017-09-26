import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/filterOptions';

import AddressSearch from '../components/AddressSearch';

class AddressSearchContainer extends Component {
  render() {
    return <AddressSearch {...this.props} />;
  }
}

const mapStateToProps = state => ({
  latitude: state.mapFilterOptions.latitude,
  longitude: state.mapFilterOptions.longitude,
  address: state.mapFilterOptions.address,
  siteType: state.mapFilterOptions.siteType,
  amenity: state.mapFilterOptions.amenity,
  waterfront: state.mapFilterOptions.waterfront,
  maxPeople: state.mapFilterOptions.maxPeople
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressSearchContainer);