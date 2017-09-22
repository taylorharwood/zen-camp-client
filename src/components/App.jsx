import React, { Component } from 'react';
import TopNav from './TopNav';
import LeftNav from './LeftNav';
import AddressSearch from './AddressSearch';
import Campgrounds from './Campgrounds';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null
    }
  }

  setLatLong(latitude, longitude) {
    this.setState({
      latitude,
      longitude
    })
  }

  renderCampgrounds() {
    const { latitude, longitude } = this.state;

    if (latitude && longitude) {
      return (
        <Campgrounds
          latitude={latitude}
          longitude={longitude}
        />
      );
    }

    return false;
  }

  render() {
    return (
      <div className="app">
        <TopNav />
        <div className="app__body">
          <LeftNav />

          <div className="app__content">
            {/* todo: add routing here */}
            <AddressSearch
              setLatLong={(latitude, longitude) => this.setLatLong(latitude, longitude)}
            />
            {this.renderCampgrounds()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
