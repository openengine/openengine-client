import Relay from 'react-relay';

let Home = (props) => {
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  );
}

export default Relay.createContainer(Home, {
  fragments: {
    board: () => Relay.QL`
      fragment on Board {
        id
        name
      }
    `,
  },
});
