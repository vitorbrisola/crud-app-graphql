var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;

var queryQuestion = require('./question/graphql/query');
var mutateQuestion = require('./question/graphql/mutation');
var queryAnswer = require('./answer/graphql/query');
var mutateAnswer = require('./answer/graphql/mutation');



exports.Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {...queryQuestion,...queryAnswer}
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {...mutateQuestion,...mutateAnswer}
  })
})