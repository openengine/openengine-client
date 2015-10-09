const Navigation = require('./navigation.jsx');
const Home = require('./home.jsx');

function Main(props) {
  return (
    <div>
      <Navigation projectName="Engine" />
      {props.children || <Home />}
    </div>
  );
}

export default Main;
