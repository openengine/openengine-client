const Navigation = require('./navigation.jsx');
const Home = require('./home.jsx');

export default function Main(props) {
  return (
    <div>
      <Navigation projectName="Engine" />
      {props.children || <Home />}
    </div>
  );
}
