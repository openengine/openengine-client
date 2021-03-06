import React from 'react';
import {IndexRoute, Route} from 'react-router';

import ViewerQueries from './queries/ViewerQueries';

import Main from './components/Main.jsx';
import BoardList from './components/BoardList.jsx';

export default (
  <Route
    path="/"
    component={Main}
    queries={ViewerQueries}
  >
    <IndexRoute
      component={BoardList}
      queries={ViewerQueries}
      prepareParams={() => ({status: 'any'})}
    />
    <Route
      path=":status"
      component={BoardList}
      queries={ViewerQueries}
    />
  </Route>
);
