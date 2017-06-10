import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
// import Routes from './routes';
import Route from './config/route';

import { AppContainer } from 'react-hot-loader'
import { HashRouter as Router } from 'react-router-dom';

import './styles/app.scss'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )

/* use redux devTool */
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
);

// const render = Component => {
//   ReactDOM.render(
//   	<Provider store={store}>
//   		<Router>
// 	        <AppContainer>
// 	          	<Component />
// 	        </AppContainer>
// 	    </Router>
//     </Provider>,
//     document.getElementById('main')
//   )
// }

// render(Routes)

// if (module.hot) {
//   module.hot.accept('./components/app', () => { render(App) })
// }

/* I think this way is better */
ReactDOM.render(
  <Provider store={store}>
  	<Router>
    	{Route}
    </Router>
  </Provider>,
  document.getElementById('main')
);