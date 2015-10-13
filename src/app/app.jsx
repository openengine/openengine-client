import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import ReactRouterRelay from 'react-router-relay';

const Main = require('./components/main.jsx');
const BoardList = require('./components/BoardList.jsx');
const Board = require('./components/board.jsx');
const NoMatch = require('./components/no_match.jsx');

import AppRelayRoute from './relays/app_relay_route.js';

ReactDOM.render(
  <Router
    history={createHistory()}
    createElement={ReactRouterRelay.createElement}
  >
    <Route path="/" component={Main}>
      <IndexRoute component={BoardList} queries={AppRelayRoute} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
