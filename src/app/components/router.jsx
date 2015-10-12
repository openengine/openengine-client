import { Router, Route } from 'react-router';
import { createHistory, useBasename } from 'history';
import Relay from 'react-relay';

const history = createHistory();

const Main = require('./main.jsx');
const Board = require('./board.jsx');
const NoMatch = require('./no_match.jsx');

import AppRelayRoute from '../relay/app_relay_route.js';

let RelayRootContainer = () => {
  return (
    <Relay.RootContainer
      Component={Main}
      route={new AppRelayRoute()}
    />
  );
};

export default function AppRouter(props) {
  return (
    <Router history={history}>
      <Route path="/" component={RelayRootContainer}>
        <Route path="board" component={Board} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  );
}
