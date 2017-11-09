import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// smooth scrollIntoView polyfill:
require('smoothscroll-polyfill').polyfill();

class CampgroundCard extends Component {
  scrollIntoView(node) {
    node.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  formatCampgroundName(facilityName) {
    return facilityName
      .trim()
      .split(' ')
      .map(word => {
        if (word.length > 0) {
          return word[0].toUpperCase() + word.slice(1).toLowerCase()
        }

        return '';
      })
      .join(' ');
  }

  formatImageSize(src) {
    return 'http://bulma.io/images/placeholders/1280x960.png';
    // return `//reserveamerica.com/${src.replace('80x53', '540x360')}`;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.selectedCampground === nextProps.campground.facilityID) {
      this.scrollIntoView(this.campgroundCardRef);
    }
  }

  render() {
    const { campground } = this.props;

    return (
      <Link to={`/campgrounds/${campground.facilityID}/contractID/${campground.contractID}`}>
        <div ref={(card) => { this.campgroundCardRef = card; }} className="campground-card card">
          <img className="card-image-top" src={this.formatImageSize(campground.faciltyPhoto)} alt="Placeholder image" />
          <div className="card-body">
            <h4 className="card-title">{this.formatCampgroundName(campground.facilityName)}</h4>
            <br />

            <div className={`alert ${campground.availabilityStatus === 'Y' ? 'alert-success' : 'alert-danger'}`}>
              <p>Currently {campground.availabilityStatus === 'Y' ? 'Available' : 'Unavailable'}</p>
            </div>

            <div className="campground-card__details">
              {
                campground.sitesWithWaterHookup
                  ? <p><i className="fa fa-bath"></i> Water available</p>
                  : null
              }
              {
                campground.sitesWithPetsAllowed
                  ? <p><i className="fa fa-check"></i> Pet friendly</p>
                  : null
              }
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default CampgroundCard;
