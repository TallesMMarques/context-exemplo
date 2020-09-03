import React, { useContext } from 'react';
import { Switch, Route, Router, Redirect, Link } from 'react-router-dom';
import history from './history';

import { VotesContextProvider } from './Context/voteListContext';
import { AuthContext } from './Context/authContext';

import Login from './pages/Login';
import Vote from './pages/Vote';
import Agradecimento from './pages/Agradecimento';

function RoutesFunction() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={() => <Redirect to='login' />} exact />
        <Route path='/login' component={Login} />

        <VotesContextProvider>
          <PrivateRoute path='/vote' component={Vote} />
          <Route path='/thanks' component={Agradecimento} />
          <div>
            <p>
              <Link to='thanks'>Agradecimentos</Link>
            </p>
            <p>
              <Link to='vote'>Votar</Link>
            </p>
            <p>
              <Link to='login'>Logout</Link>
            </p>
          </div>
        </VotesContextProvider>
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return <Route {...rest} render={(props) => (
    user !== ""
      ? <Component {...props} />
      : <Redirect to='/login' />
  )}
  />
}

export default RoutesFunction;