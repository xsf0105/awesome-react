import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';	// 20170527
import { Router } from 'react-router'

import App from './components/app'
import './styles/app.scss'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}

render(App)

// if (module.hot) {
//   module.hot.accept('./components/app', () => {
//   	const NewRoot = require('pages/routes').default;
//   	render(
//   		<NewRoot / >,
//   		document.getElementById('main')
//   	)
//   })
// }

if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) })
}