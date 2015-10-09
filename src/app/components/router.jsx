import { Router, Route } from 'react-router'
import { createHistory, useBasename } from 'history'

const history = createHistory();

const Main = require('./main.jsx');
const Board = require('./board.jsx');
const NoMatch = require('./no_match.jsx');

export default function AppRouter(props) {
  return (
    <Router history={history}>
      <Route path="/" component={Main}>
        <Route path="board" component={Board} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  );
}
