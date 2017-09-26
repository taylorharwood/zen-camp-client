import React, { Component } from 'react';

class CampgroundCard extends Component {
  render() {
    const { campground } = this.props;

    return (
      <div ref={(card) => { this.campgroundCard = card; }} className="campground-card card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{campground.facilityName}</p>
              <p className="subtitle is-6">Currently {campground.availabilityStatus === 'Y' ? 'Available' : 'Unavailable'}</p>
            </div>
          </div>

          <div className="content">

          </div>
        </div>
      </div>
    );
  }
}

export default CampgroundCard;
