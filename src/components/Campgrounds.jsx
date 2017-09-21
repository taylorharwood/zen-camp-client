import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Campgrounds extends Component {
  render() {
    const { data } = this.props;

    if (data.loading) {
      return <h3>Loading...</h3>;
    }

    return (
      <div className="campgrounds">
        {data.getCampgrounds.map(campground => <p>{campground.facilityName}</p>)}
      </div>
    );
  }
}

const query = gql`
  query getCampgrounds($latitude: String!, $longitude: String!) {
    getCampgrounds(latitude: $latitude, longitude: $longitude) {
      contractID
      facilityName
      facilityID
      facilityPhoto
      sitesWithWaterHookup
      sitesWithWaterfront
      availabilityStatus
    }
  }
`;

export default graphql(query)(Campgrounds);