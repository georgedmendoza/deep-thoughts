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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';


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
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' compnent={Signup} />
              {/* ? means it optional */}
              <Route exact path='/profile/:username?' component={Profile} /> 
              <Route exact path='/thought/:id' component={SingleThought} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
