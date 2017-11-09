import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import CampgroundDetail from '../components/CampgroundDetail';

class CampgroundDetailContainer extends Component {
  render() {
    const { loading, getCampgroundDetail } = this.props.data;

    if (loading) {
      return <h2>Loading...</h2>
    }

    return <CampgroundDetail campground={getCampgroundDetail} />
  }
}

const query = gql`
  query getCampgroundDetail($parkId: String!, $contractID: String!) {
    getCampgroundDetail(parkId: $parkId, contractID: $contractID) {
      alert
      contractId
      description
      drivingDirection
      facilitiesDescription
      facility
      facilityID
      importantInformation
      latitude
      longitude
      nearbyAttrctionDescription
      note
      recreationDescription
      regionName
      webUrl
    }
  }
`;

export default graphql(query, {
  options: (props) => {
    return {
      variables: {
        parkId: props.parkId,
        contractID: props.contractID
      }
    }
  }
})(CampgroundDetailContainer);