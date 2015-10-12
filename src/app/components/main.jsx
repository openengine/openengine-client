import Relay from 'react-relay';

import Navigation from './navigation.jsx';
import Home from './home.jsx';

let Main = (props) => {
  return (
    <div>
      <Navigation projectName="Engine" />
      {props.children || <Home />}
    </div>
  );
}

export default Relay.createContainer(Main, {
  fragments: {
    board: () => Relay.QL`
      fragment on Board {
        id
        name
      }
    `,
  },
});
