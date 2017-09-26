import React, { Component } from 'react';
import CampgroundCard from './CampgroundCard';

class CampgroundList extends Component {
  render() {
    return (
      <div className="campground-list">
        { this.props.campgrounds.map(campground => <CampgroundCard campground={campground} />) }
      </div>
    )
  }
}

  export default CampgroundList;
