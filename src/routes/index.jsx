import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import User from '../containers/UserDetails';
import NotFound from '../components/NotFound';
import { store, history } from '../store/store';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={User} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
