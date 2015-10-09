import { Router, Route } from 'react-router'
import { createHistory, useBasename } from 'history'

const history = createHistory();

const Main = require('./main.jsx');
const Home = require('./home.jsx');
const About = require('./about.jsx');
const NoMatch = require('./no_match.jsx');

function AppRouter(props) {
  return (
    <Router history={history}>
      <Route path="/" component={Main}>
        <Route path="about" component={About} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  );
}

export default AppRouter;
