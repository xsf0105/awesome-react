
// https://reacttraining.cn
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Navbar from '../components/Header/Navbar'

import App from '../App'
import Home from '../containers/Home'
import Topics from '../containers/Topics'
import Jobs from '../containers/Jobs'
import Remote from '../containers/Remote'

// https://stackoverflow.com/questions/42748727/using-react-indexroute-in-react-router-v4/42751770
const RouteConfig = (
  <main>
      <Navbar />
      <Route path="/" component={App} />
      <Route exact path="/" component={Home} />
      <Route path="/topics/:id" component={Topics} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/remote" component={Remote} />
  </main>
)

export default RouteConfig;
