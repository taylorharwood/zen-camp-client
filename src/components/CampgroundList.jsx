import React, { Component } from 'react';
import CampgroundCard from './CampgroundCard';

class CampgroundList extends Component {
  renderLoading() {
    return <div className="notification">Loading...</div>;
  }

  renderCampgroundCards(campgrounds, selectedCampground) {
    return campgrounds.map(campground => {
      return (
        <CampgroundCard
          key={campground.facilityID}
          campground={campground}
          selectedCampground={selectedCampground}
        />
      );
    })
  }

  render() {
    const { selectedCampground, campgrounds, loading } = this.props;

    return (
      <div className="campground-list">
        {
          loading
            ? this.renderLoading()
            : this.renderCampgroundCards(campgrounds, selectedCampground)
        }

      </div>
    )
  }
}

  export default CampgroundList;
