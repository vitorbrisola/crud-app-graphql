var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;

var query = require('./query');
var mutation = require('./mutation');

exports.Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: query
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
})