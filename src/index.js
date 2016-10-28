import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import client from './query-client';
import { getTeams } from './actions/league';
import { showTeam } from './actions/team';
import reducers from './reducers/index';
import App from './components/app';
import League from './containers/league';
import Team from './containers/team';
import './stylesheets/index.css';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(getTeams(client));

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={League} />
        <Route
          path="team/:identifier"
          component={Team}
          onEnter={e => store.dispatch(showTeam(client, e.params.identifier))}
        />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
