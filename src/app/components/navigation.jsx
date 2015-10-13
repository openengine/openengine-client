import { Link } from 'react-router'

export default function Navigation(props) {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <Link className="navbar-brand" to="/">{props.projectName}</Link>
    </div>
  );
}
