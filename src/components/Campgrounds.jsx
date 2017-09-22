import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Map from './Map';

class Campgrounds extends Component {
  render() {
    const { data, latitude, longitude } = this.props;

    if (data.loading) {
      return (
        <article className="campgrounds__loading message is-success">
          <div className="message-body">
            Pack your tents and boots! We're finding you campsites now.
          </div>
        </article>
      );
    }

    return (
      <div className="campgrounds">
        <Map
          latitude={latitude}
          longitude={longitude}
          campgrounds={data.getCampgrounds}
        />
      </div>
    );
  }
}

const query = gql`
  query getCampgrounds($latitude: String!, $longitude: String!) {
    getCampgrounds(latitude: $latitude, longitude: $longitude) {
      facilityName
      facilityID
      facilityPhoto
      latitude
      longitude
      contractID
      sitesWithWaterHookup
      sitesWithWaterfront
      availabilityStatus
    }
  }
`;

export default graphql(query)(Campgrounds);