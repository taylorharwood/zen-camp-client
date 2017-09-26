import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Map from './Map';

class Campgrounds extends Component {
  render() {
    const { campgrounds, latitude, longitude } = this.props;

    return (
      <div className="campgrounds">
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