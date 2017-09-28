import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import CampgroundsView from '../components/CampgroundsView';
import * as actions from '../actions/mapState';

class CampgroundsViewContainer extends Component {
  render() {
    const { data, latitude, longitude, selectCampground } = this.props;

    return (
      <CampgroundsView
        loading={data && data.loading}
        selectCampground={selectCampground}
        campgrounds={data && data.getCampgrounds || []}
        latitude={latitude}
        longitude={longitude}
      />
    );
  }
}

const query = gql`
  query getCampgrounds(
    $latitude: String!, 
    $longitude: String!, 
    $siteType: String, 
    $amenity: String, 
    $maxPeople: String, 
    $waterfront: String
  ) {
    getCampgrounds(
      latitude: $latitude, 
      longitude: $longitude,
      siteType: $siteType,
      amenity: $amenity, 
      maxpeople: $maxPeople, 
      waterfront: $waterfront
    ) {
      facilityName
      facilityID
      faciltyPhoto
      latitude
      longitude
      contractID
      sitesWithPetsAllowed
      sitesWithWaterHookup
      sitesWithWaterfront
      availabilityStatus
    }
  }
`;

const mapStateToProps = state => ({
  latitude: state.mapFilterOptions.latitude,
  longitude: state.mapFilterOptions.longitude,
  siteType: state.mapFilterOptions.siteType,
  amenity: state.mapFilterOptions.amenity,
  maxPeople: state.mapFilterOptions.maxPeople,
  waterfront: state.mapFilterOptions.waterfront
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(query, {
    skip: ({ latitude, longitude }) => !latitude || !longitude
  })
)(CampgroundsViewContainer);