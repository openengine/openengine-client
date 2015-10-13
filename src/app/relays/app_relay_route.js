import Relay from 'react-relay';

export default class AppRelayRoute extends Relay.Route {}

AppRelayRoute.path = '/';
AppRelayRoute.queries = {
  board: () => Relay.QL`
    query {
      Board {
        ${Component.getFragment('board')},
      }
    }
  `,
};
AppRelayRoute.routeName = 'AppRelayRoute';
