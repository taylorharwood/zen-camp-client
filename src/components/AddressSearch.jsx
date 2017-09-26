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
            <div className="address-search__input field has-addons">
              <p className="control is-expanded">
                <input
                  id="address-search-autocomplete-input"
                  className="input is-primary is-medium"
                  placeholder="Enter your address..."
                  value={address}
                  onChange={evt => setAddress(evt.target.value)}
                  type="text"
                />
              </p>
              <p className="control is-expanded">
                <button type="submit" className="button is-primary is-medium">Find campsites!</button>
              </p>
            </div>

            <AddressSearchFilters {...this.props} />
          </form>
        </div>
      </div>
    );
  }
}

export default AddressSearch;
