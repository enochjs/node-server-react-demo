import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router'
import App from './containers'

const routes = (
  <Route path="/" component={App}>
  </Route>
)

export default routes