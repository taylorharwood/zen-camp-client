import React, { Component } from 'react';

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
        <form onSubmit={evt => this.onSubmit(evt)} className="address-search__form">
          <input
            placeholder="Enter your address..."
            value={this.state.address}
            onChange={evt => this.setState({ address: evt.target.value })}
            type="text"
            className="address-search__input"
          />
          <button type="submit" className="primary button">Find campsites</button>
        </form>
      </div>
    );
  }
}

export default AddressSearch;
