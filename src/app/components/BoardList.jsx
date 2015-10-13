import Relay from 'react-relay';

let BoardList = (props) => {
  return (
    <div className="container">
      <h1>BoardList</h1>
    </div>
  );
}

export default Relay.createContainer(BoardList, {
  fragments: {
    board: () => Relay.QL`
      fragment on Board {
        id
        name
      }
    `,
  },
});
