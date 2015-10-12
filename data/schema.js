import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  Board,
  getBoard,
} from './database';

let {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    let {type, id} = fromGlobalId(globalId);
    if (type === 'Board') {
      return getBoard(id);
    } else if (type === 'Card') {
      return getCard(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof Board) {
      return boardType;
    } else if (obj instanceof Card)  {
      return cardType;
    } else {
      return null;
    }
  }
);

let boardType = new GraphQLObjectType({
  name: 'Board',
  description: 'A board to manage cards',
  fields: () => ({
    id: globalIdField('Board'),
  })
});

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    board: {
      type: boardType,
      resolve: () => getBoard()
    }
  }),
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var Schema = new GraphQLSchema({
  query: queryType
});
