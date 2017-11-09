import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CampgroundDetail extends Component {
  render() {
    const { campground } = this.props;
    
    return (
      <div className="campground-detail">
        <h1>{campground.facility}</h1>
        <hr />
        <p>{campground.description}</p>
      </div>
    );
  }
}

export default CampgroundDetail;
