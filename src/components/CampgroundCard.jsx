import React, { Component } from 'react';

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
      <div ref={(card) => { this.campgroundCardRef = card; }} className="campground-card card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.formatImageSize(campground.faciltyPhoto)} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.formatCampgroundName(campground.facilityName)}</p>
              <br />

              <div className={`notification ${campground.availabilityStatus === 'Y' ? 'is-success' : 'is-danger'}`}>
                <p className="subtitle is-6 ">
                  Currently {campground.availabilityStatus === 'Y' ? 'Available' : 'Unavailable'}
                </p>
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

          <div className="content">

          </div>
        </div>
      </div>
    );
  }
}

export default CampgroundCard;
