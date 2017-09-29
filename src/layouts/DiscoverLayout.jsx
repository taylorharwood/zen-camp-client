import React, { Component } from 'react';

import AddressSearchContainer from '../containers/AddressSearchContainer';
import CampgroundsViewContainer from '../containers/CampgroundsViewContainer';

class DiscoverLayout extends Component {
  render() {
    return [
      <AddressSearchContainer key={0} />,
      <CampgroundsViewContainer key={1} />
    ]
  }
}

export default DiscoverLayout;