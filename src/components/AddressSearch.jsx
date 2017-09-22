import React, { Component } from 'react';

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

class AddressSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    };
  }

  componentDidMount() {
    this.geocoder = new google.maps.Geocoder();
  }

  codeAddress() {
    this.geocoder.geocode( { 'address': this.state.address }, (results, status) => {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();

        this.props.setLatLong(latitude, longitude);

      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  onSubmit(evt) {
    evt.preventDefault();

    this.codeAddress();
  }

  render() {
    return (
      <div className="address-search">
        <div className="address-search__content columns">
          <form
            onSubmit={evt => this.onSubmit(evt)}
            className="address-search__form column"
          >
            {/* todo: move this section to own component AddressSearchOptions */}
            <section className="columns">
              <div className="field column">
                <div className="control is-expanded">
                  <label className="label">Site Type:</label>

                  <div className="select is-fullwidth">
                    <select
                      onChange={() => {}}
                      name="siteType"
                      className="address-search__site-type"
                    >
                      {
                        SITE_TYPES.map(option => {
                          return <option value={option.value}>{option.type}</option>
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
                      onChange={() => {}}
                      name="siteType"
                      className="address-search__amenity-type"
                    >
                      {
                        AMENITY_TYPES.map(option => {
                          return <option value={option.value}>{option.type}</option>
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
                      onChange={() => {}}
                      name="siteType"
                      className="address-search__max-people"
                    >
                      {
                        MAX_PEOPLE.map(option => {
                          return <option value={option}>{option}</option>
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
                      onChange={() => {}}
                      name="siteType"
                      className="address-search__max-people"
                    >
                      {
                        ['YES', 'NO'].map(option => {
                          return <option value={option}>{option}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <div className="field has-addons">
              <p className="control is-expanded">
                <input
                  className="address-search__input input is-primary is-medium"
                  placeholder="Enter your address..."
                  value={this.state.address}
                  onChange={evt => this.setState({ address: evt.target.value })}
                  type="text"
                />
              </p>
              <p className="control is-expanded">
                <button type="submit" className="button is-primary is-medium">Find campsites!</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddressSearch;
