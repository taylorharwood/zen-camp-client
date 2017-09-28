import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import CampgroundListContainer from '../containers/CampgroundListContainer';
import Map from './Map';

class CampgroundsView extends Component {
  render() {
    const { campgrounds, latitude, longitude, selectCampground, loading } = this.props;

    return (
      <div className="campground-view">
        <CampgroundListContainer
          loading={loading}
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

export default CampgroundsView;