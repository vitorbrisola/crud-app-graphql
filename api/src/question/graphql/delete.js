var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;


var Model = require('../mongodb/schema');
var Type = require('./type').Type;


exports.remove = {
  type: Type,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async(root, args)=> {
    const removedObj = await Model.findByIdAndRemove(args.id)
    if (!removedObj) {
      throw new Error('error')
    }
    return removedObj;
  }
}
