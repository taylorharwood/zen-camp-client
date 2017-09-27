import React, { Component } from 'react';
import CampgroundCard from './CampgroundCard';

class CampgroundList extends Component {
  render() {
    const { selectedCampground } = this.props;

    return (
      <div className="campground-list">
        {
          this.props.campgrounds.map(campground => {
            return (
              <CampgroundCard
                campground={campground}
                selectedCampground={selectedCampground}
              />
            );
          })
        }
      </div>
    )
  }
}

  export default CampgroundList;
