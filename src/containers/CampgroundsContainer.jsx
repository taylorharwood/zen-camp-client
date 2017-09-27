import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import Campgrounds from '../components/Campgrounds';
import * as actions from '../actions/mapState';

class CampgroundsContainer extends Component {
  render() {
    const { data, latitude, longitude, selectCampground } = this.props;

    if (!latitude || !longitude) {
      return (
        <article className="campgrounds__loading message is-info">
          <div className="message-body">
            Set your filter options above and click "Find campgrounds!" to start camping.
          </div>
        </article>
      );
    }

    if (data && data.loading) {
      return (
        <article className="campgrounds__loading message is-success">
          <div className="message-body">
            Pack your tents and boots! We're finding campsites for you now.
          </div>
        </article>
      );
    }

    data.getCampgrounds.forEach(campground => console.log(campground.facilityPhoto));

    return (
      <Campgrounds
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
  waterfront: state.mapFilterOptions.waterfront,
  shouldQueryCampgrounds: state.mapFilterOptions.shouldQueryCampgrounds
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(query, {
    skip: ({ latitude, longitude }) => !latitude || !longitude
  })
)(CampgroundsContainer);