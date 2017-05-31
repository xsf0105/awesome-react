import React from 'react';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Link, Router, Route, IndexRoute, Redirect } from 'react-router-dom';


import Home from '../containers/Home';
import Topics from '../containers/Topics';

const RouteConfig = (
  <main>
      <Link to="/">toHome</Link><br/>
      <Link to="/topics">toUser</Link>
    <Route path="/" component={Home} />
    <Route path="/topics" component={Topics} />
  </main>  
);

export default RouteConfig;
