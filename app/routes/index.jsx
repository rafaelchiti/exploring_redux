import React, { PropTypes } from 'react';
import { Redirect, Router, Route } from 'react-router';
import Application from 'app/components/application';

export function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route component={Application} path="/"></Route>
    </Router>
  )
}
