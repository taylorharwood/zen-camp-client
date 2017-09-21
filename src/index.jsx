import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import AddressSearch from './components/AddressSearch';
import Campgrounds from './components/Campgrounds';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPH_QL_SERVER_URL
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

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
      <div>
        <AddressSearch
          setLatLong={(latitude, longitude) => this.setLatLong(latitude, longitude)}
        />
        {this.renderCampgrounds()}
      </div>
    );
  }
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
);