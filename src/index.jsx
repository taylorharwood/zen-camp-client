import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPH_QL_SERVER_URL
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

class App extends Component {
  render() {
    if (this.props.data.loading) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        {this.props.data.getCampgrounds.map(campground => <p>{campground.facilityName}</p>)}
      </div>
    );
  }
}

const query = gql`
  query {
    getCampgrounds(latitude: "34.244443", longitude: "-118.238456") {
      contractID
      facilityName
      facilityID
      facilityPhoto
      sitesWithWaterHookup
      sitesWithWaterfront
      availabilityStatus
    }
  }
`;

const AppWithData = graphql(query)(App);

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>, 
  document.getElementById('root')
);