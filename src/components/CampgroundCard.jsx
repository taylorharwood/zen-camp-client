import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatCampgroundName } from '../utils/index';

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
      <div ref={(card) => { this.campgroundCardRef = card; }} className="campground-card card">
        <Link to={`/campgrounds/${campground.facilityID}/contractID/${campground.contractID}`}>
          <img className="card-img-top" src={this.formatImageSize(campground.faciltyPhoto)} alt="Placeholder image" />
        </Link>
        
        <div className="card-body">
          <h4 className="card-title">{formatCampgroundName(campground.facilityName)}</h4>
          <br />

          <div className={`alert ${campground.availabilityStatus === 'Y' ? 'alert-success' : 'alert-danger'}`}>
            <span>Currently {campground.availabilityStatus === 'Y' ? 'Available' : 'Unavailable'}</span>
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
    );
  }
}

export default CampgroundCard;
