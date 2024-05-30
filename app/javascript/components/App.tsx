import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import DashboardMain from './DashboardMain';

const csrfToken =
  document.querySelector('meta[name=csrf-token]')?.getAttribute('content') ||
  '';

const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken,
    },
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <DashboardMain />
      </ApolloProvider>
    </>
  );
};

export default App;
