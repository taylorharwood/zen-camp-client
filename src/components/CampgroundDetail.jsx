import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatCampgroundName } from '../utils/index';

class CampgroundDetail extends Component {
  render() {
    const { campground } = this.props;
    
    return (
      <div className="campground-detail container-fluid">
        <h1>{formatCampgroundName(campground.facility)}</h1>
        <hr />
        <p>{campground.description}</p>
      </div>
    );
  }
}

export default CampgroundDetail;
