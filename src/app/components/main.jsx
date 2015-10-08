var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navigation = require('./navigation.jsx');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navigation projectName="react-bootstrap-starter" />
        <div className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
            <p className="lead">Use this document as a way to quickly start any new project.
              <br />
              All you get is this text and a mostly barebones HTML document.</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;
