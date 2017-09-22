import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPH_QL_SERVER_URL
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

export default client;