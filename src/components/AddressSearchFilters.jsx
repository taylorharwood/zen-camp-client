import React, { Component } from 'react';

// todo move constants to constants folder
const SITE_TYPES = [
  {type: 'RV Sites', value: 2001},
  {type: 'Cabins or Lodgings', value: 10001},
  {type: 'Tent', value: 2003},
  {type: 'Trailer', value: 2002},
  {type: 'Group Site', value: 9002},
  {type: 'Day Use', value: 9001},
  {type: 'Horse Site', value: 3001},
  {type: 'Boat Site', value: 2004}
];

const AMENITY_TYPES = [
  {type: 'Biking', value: 4001},
  {type: 'Boating', value: 4002},
  {type: 'Equipment Rental', value: 4003},
  {type: 'Fishing', value: 4004},
  {type: 'Golf', value: 4005},
  {type: 'Hiking', value: 4006},
  {type: 'Horseback Riding', value: 4007},
  {type: 'Hunting', value: 4008},
  {type: 'Recreational Activities', value: 4009},
  {type: 'Scenic Trails', value: 4010},
  {type: 'Sports', value: 4011},
  {type: 'Beach/Water Activities', value: 4012},
  {type: 'Winter Activities', value: 4013},
];

const MAX_PEOPLE = [1, 2, 3, 4, 5, 6, 7, 8];

class AddressSearchFilters extends Component {
  render() {
    const { siteType, amenity, maxpeople, waterfront } = this.props;
    const { setSiteType, setAmenity, setMaxPeople, setWaterfront } = this.props;

    return (
      <section className="address-search__filters columns">
        <div className="field column">
          <div className="control is-expanded">
            <label className="label">Site Type:</label>

            <div className="select is-fullwidth">
              <select
                value={siteType}
                onChange={evt => setSiteType(evt.target.value)}
                name="siteType"
                className="address-search__site-type"
              >
                {
                  SITE_TYPES.map(option => {
                    return <option key={option.value} value={option.value}>{option.type}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>

        <div className="field column">
          <div className="control is-expanded">
            <label className="label">Primary Amenity:</label>

            <div className="select is-fullwidth">
              <select
                value={amenity}
                onChange={evt => setAmenity(evt.target.value)}
                name="siteType"
                className="address-search__amenity-type"
              >
                {
                  AMENITY_TYPES.map(option => {
                    return <option key={option.value} value={option.value}>{option.type}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>

        <div className="field column">
          <div className="control is-expanded">
            <label className="label">Max People:</label>

            <div className="select is-fullwidth">
              <select
                value={maxpeople}
                onChange={evt => setMaxPeople(evt.target.value)}
                name="siteType"
                className="address-search__max-people"
              >
                {
                  MAX_PEOPLE.map(option => {
                    return <option key={option} value={option}>{option}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>

        <div className="field column">
          <div className="control is-expanded">
            <label className="label">Waterfront sites:</label>

            <div className="select is-fullwidth">
              <select
                value={waterfront}
                onChange={evt => setWaterfront(evt.target.value)}
                name="siteType"
                className="address-search__waterfront"
              >
                {
                  ['YES', 'NO'].map(option => {
                    return <option key={option} value={option}>{option}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddressSearchFilters;
