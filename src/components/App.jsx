import React, { Component } from 'react';
import TopNav from './TopNav';
import LeftNav from './LeftNav';
import AddressSearchContainer from '../containers/AddressSearchContainer';
import CampgroundsContainer from '../containers/CampgroundsContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        <div className="app__body">
          <LeftNav />

          <div className="app__content">
            {/* todo: add routing here */}
            <AddressSearchContainer />
            <CampgroundsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
