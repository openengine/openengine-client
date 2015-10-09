import { Link } from 'react-router'

function Navigation(props) {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <Link className="navbar-brand" to="/">{props.projectName}</Link>
      <ul className="nav navbar-nav">
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
