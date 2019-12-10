var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;

var Model = require('../mongodb/schema');
var Type = require('./type').Type;

exports.add = {
  type: Type,

  args: {
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    isRight: {
      type: new GraphQLNonNull(GraphQLBoolean),
    }
  },
  
  resolve: async(root, args)=> { 
    
    //under the resolve method we get our arguments
    const dataModel = new Model(args);
    const newData = await dataModel.save();
    if (!newData) {
      throw new Error('error');
    }
    return newData
  }
}