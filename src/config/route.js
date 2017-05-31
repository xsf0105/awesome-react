import React from 'react'
import { Link, Router, Route, IndexRoute, Redirect } from 'react-router-dom'

import App from '../App'
import Home from '../containers/Home'
import Topics from '../containers/Topics'

const RouteConfig = (
  <main>
      <Route path="/" component={App} />
      <Route path="/topics" component={Topics} />
  </main>  
)

export default RouteConfig;
