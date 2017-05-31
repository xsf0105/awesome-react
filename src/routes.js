import React from 'react'
// import createHistory from 'history/createHashHistory'

// import createHistory from 'history/createBrowserHistory'
// const history = createHistory()

import { Link, Switch, Route, Redirect } from 'react-router-dom';


/* application components */
// import Header from './components/Header';

import Home from './containers/Home/home';
import User from './containers/User/user';

// @connect (state => state)
const Routes = () => (
  <main>
      <Link to="/">toHome</Link>
      <Link to="/user">toUser</Link>
      <Route path="/" component={Home} />
      <Route path="/user" component={User} />
  </main>
);

export default Routes;
