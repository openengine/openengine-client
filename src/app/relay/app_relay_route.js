import Relay from 'react-relay';

export default class AppRelayRoute extends Relay.Route {}

AppRelayRoute.path = '/';
AppRelayRoute.queries = {
  board: () => Relay.QL`query { board }`,
};
AppRelayRoute.routeName = 'AppRelayRoute';
