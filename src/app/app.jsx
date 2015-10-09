import React from 'react';
import ReactDOM from 'react-dom';

(function () {
  const injectTapEventPlugin = require("react-tap-event-plugin");
  const Router = require('./components/router.jsx');

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  ReactDOM.render(<Router />, document.getElementById('main'));
})();
