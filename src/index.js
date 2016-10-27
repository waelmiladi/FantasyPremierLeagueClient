import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import client from './query-client';
import { getTeams } from './actions/app';
import reducers from './reducers/index';
import App from './containers/app';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.dispatch(getTeams(client));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
