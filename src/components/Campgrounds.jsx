import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Map from './Map';
import CampgroundList from './CampgroundList';

class Campgrounds extends Component {
  render() {
    const { campgrounds, latitude, longitude } = this.props;

    return (
      <div className="campgrounds">
        <CampgroundList campgrounds={campgrounds} />
        <Map
          latitude={latitude}
          longitude={longitude}
          campgrounds={campgrounds}
        />
      </div>
    );
  }
}

export default Campgrounds;