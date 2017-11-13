import React, { Component } from 'react';
import AddressSearchFilters from './AddressSearchFilters';

class AddressSearch extends Component {
  componentDidMount() {
    const addressSearchAutocompleteInput = document.getElementById('address-search-autocomplete-input');

    this.geocoder = new google.maps.Geocoder();
    this.autocomplete = new google.maps.places.Autocomplete(addressSearchAutocompleteInput, {
      types: ['(cities)']
    });

    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      const formattedAddress = this.autocomplete.getPlace().formatted_address;

      if (formattedAddress) {
        this.props.setAddress(formattedAddress);
      }
    });
  }

  setLatLng() {
    const { address, setLatitude, setLongitude } = this.props;

    this.geocoder.geocode( { 'address': address }, (results, status) => {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();

        setLatitude(latitude);
        setLongitude(longitude);

      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  onSubmit(evt) {
    evt.preventDefault();

    this.setLatLng();
  }

  render() {
    const { address, setAddress } = this.props;

    return (
      <div className="address-search">
        <div className="address-search__content columns">
          <form
            onSubmit={evt => this.onSubmit(evt)}
            className="address-search__form column"
          >
            <h4 className="address-search__title">Let's start with an address</h4>
            <div className="row">
              <div className="address-search__input input-group col-md-6">
                <input
                  id="address-search-autocomplete-input"
                  className="form-control"
                  placeholder="Enter your address..."
                  value={address}
                  onChange={evt => setAddress(evt.target.value)}
                  type="text"
                />

                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="submit">Find campsites!</button>
                </span>
              </div>                
            </div>

            <AddressSearchFilters {...this.props} />
          </form>
        </div>
      </div>
    );
  }
}

export default AddressSearch;
