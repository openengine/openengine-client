function Navigation(props) {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <a className="navbar-brand" href="#">{props.projectName}</a>
      <ul className="nav navbar-nav">
        <li className="active" eventKey={1} href="#home">Home</li>
        <li eventKey={2} href="#about">About</li>
        <li eventKey={2} href="#about">Contact</li>
      </ul>
    </div>
  );
}

module.exports = Navigation;
