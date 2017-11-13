import React, { Component } from 'react';
import { SITE_TYPES, AMENITY_TYPES, MAX_PEOPLE, WATERFRONT_TYPES } from '../constants/constants';

class AddressSearchFilters extends Component {
  render() {
    const { siteType, amenity, maxpeople, waterfront } = this.props;
    const { setSiteType, setAmenity, setMaxPeople, setWaterfront } = this.props;

    return (
      <section className="address-search__filters">
          <h5 className="address-search__subtitle">Additional filtering</h5>
          <div className="row">
            <div className="form-group col-md-3">
              <label className="label">Site Type:</label>

              <select
                value={siteType}
                onChange={evt => setSiteType(evt.target.value)}
                name="siteType"
                className="address-search__site-type form-control"
              >
                {
                  Object.keys(SITE_TYPES).map((option, i) => {
                    return <option key={option} value={option}>{SITE_TYPES[option]}</option>
                  })
                }
              </select>
            </div>

            <div className="form-group col-md-3">
              <label className="label">Primary Amenity:</label>
              <select
                value={amenity}
                onChange={evt => setAmenity(evt.target.value)}
                name="siteType"
                className="address-search__amenity-type form-control"
              >
                {
                  Object.keys(AMENITY_TYPES).map((option, i) => {
                    return <option key={option} value={option}>{AMENITY_TYPES[option]}</option>
                  })
                }
              </select>
            </div>

          <div className="form-group col-md-3">
              <label className="label">Max People:</label>

              <select
                value={maxpeople}
                onChange={evt => setMaxPeople(evt.target.value)}
                name="siteType"
                className="address-search__max-people form-control"
              >
                {
                  MAX_PEOPLE.map((option, i) => {
                    return <option key={option} value={option}>{MAX_PEOPLE[option]}</option>
                  })
                }
              </select>
          </div>

          <div className="form-group col-md-3">
              <label className="label">Waterfront sites:</label>

              <select
                value={waterfront}
                onChange={evt => setWaterfront(evt.target.value)}
                name="siteType"
                className="address-search__waterfront form-control"
              >
                {
                  Object.keys(WATERFRONT_TYPES).map((option, i) => {
                    return <option key={option} value={option}>{WATERFRONT_TYPES[option]}</option>
                  })
                }
              </select>
          </div>
        </div>
      </section>
    );
  }
}

export default AddressSearchFilters;
