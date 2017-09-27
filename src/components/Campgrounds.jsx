import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Map from './Map';
import CampgroundListContainer from '../containers/CampgroundListContainer';

class Campgrounds extends Component {
  render() {
    const { campgrounds, latitude, longitude, selectCampground } = this.props;

    return (
      <div className="campgrounds">
        <CampgroundListContainer
          campgrounds={campgrounds}
        />
        <Map
          selectCampground={selectCampground}
          latitude={latitude}
          longitude={longitude}
          campgrounds={campgrounds}
        />
      </div>
    );
  }
}

export default Campgrounds;