import React, { Component } from 'react';

import CampgroundDetailContainer from '../containers/CampgroundDetailContainer';

class CampgroundDetailLayout extends Component {
  render() {
    const { params } = this.props.match;

    return <CampgroundDetailContainer parkId={params.parkId} contractID={params.contractID} />
  }
}

export default CampgroundDetailLayout;