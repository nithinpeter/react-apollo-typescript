import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Days } from './Days';

import './App.css';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjcd9lwuq03p10126yqjnjsga',
  }),
  cache: new InMemoryCache(),
});

export class App extends React.Component<any, any> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Days />
      </ApolloProvider>
    );
  }
}
