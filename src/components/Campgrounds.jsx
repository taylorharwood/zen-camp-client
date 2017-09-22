import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Map from './Map';

class Campgrounds extends Component {
  render() {
    const { data, latitude, longitude } = this.props;

    if (data.loading) {
      return <h3>Loading...</h3>;
    }

    return (
      <div className="campgrounds">
        <Map
          latitude={latitude}
          longitude={longitude}
          campgrounds={data.getCampgrounds}
        />

        {/*{data.getCampgrounds.map(campground => <p>{campground.facilityName}</p>)}*/}
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