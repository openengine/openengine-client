var Navigation = require('./navigation.jsx');

function Main(props) {
  return (
    <div>
      <Navigation projectName="Engine" />
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

module.exports = Main;
