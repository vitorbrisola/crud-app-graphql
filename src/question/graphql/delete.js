var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;


var QuestModel = require('../mongodb/schema').Model;
var QuestType = require('./type').Type;


exports.remove = {
  type: QuestType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async(root, args)=> {
    const removedObj = await QuestModel.findByIdAndRemove(args.id)
    if (!removedObj) {
      throw new Error('error')
    }
    return removedObj;
  }
}