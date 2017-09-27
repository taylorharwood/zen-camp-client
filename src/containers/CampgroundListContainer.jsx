import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/mapState';

import CampgroundList from '../components/CampgroundList';

class CampgroundListContainer extends Component {
  render() {
    return <CampgroundList {...this.props} />
  }
}

const mapStateToProps = state => ({
  selectedCampground: state.mapState.selectedCampground
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CampgroundListContainer);