import React from 'react'
import { Link, Router, Route, IndexRoute, Redirect } from 'react-router-dom'

import App from '../App'
import Topics from '../containers/Topics'
import Jobs from '../containers/Jobs'
import Remote from '../containers/Remote'

const RouteConfig = (
  <main>
      <Route path="/" component={App} />
      <Route path="/topics" component={Topics} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/remote" component={Remote} />
  </main>
)

export default RouteConfig;
