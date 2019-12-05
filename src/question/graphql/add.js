var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;


var QuestModel = require('../mongodb/schema').Model;
var QuestType = require('./type').Type;


exports.add = {
  type: QuestType,
  args: {
    description: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: async(root, args)=> { 
    
    //under the resolve method we get our arguments
    const qModel = new QuestModel(args);
    const newQuest = await qModel.save();
    if (!newQuest) {
      throw new Error('error');
    }
    return newQuest
  }
}