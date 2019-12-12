var GraphQLList = require('graphql').GraphQLList;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLNonNull = require('graphql').GraphQLNonNull;

var Model = require('../mongodb/schema');
var Type = require('./type').Type;

const tests = {
  type: new GraphQLList(Type),
  resolve:  async ()=> {
    const quests = await Model.find()
    if (!quests) {
            throw new Error('error while fetching data')
    }
    return quests
  }
}

const test = {
  type: Type,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async(root, args)=> { 
    const quest = await Model.findById(args.id)
    if (!quest) {
      throw new Error('error');
    }
    return quest
  }
}

module.exports = {
  tests,
  test
}