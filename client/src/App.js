import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
/*-Speacial React component to provide data to other components, 
  -constructor init connec to grapQL APi server
  -cache API res data to make request for efficient
  -control how Apollo Client makes request, like a middleware 
*/

// establish new link to GraphQl
const httpLink = createHttpLink({
  uri: '/graphql',
});

// new connection to api endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    // everything in btw ApolloProvider will have access to servers API data through the client we set up 
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
