var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLNonNull = require('graphql').GraphQLNonNull;

//import book model 
var QuestModel = require('../mongodb/schema');
//import GraphQL BookType
var QuestType = require('./type').Type;

// Query
exports.Query2 = new GraphQLObjectType({
  name: 'Query',
  fields:  ()=> {
    return {
      questions: {
        type: new GraphQLList(QuestType),
        resolve:  async ()=> {
          const quests = await QuestModel.find()
          if (!quests) {
            throw new Error('error while fetching data')
          }
          return quests
        }
      }
    }
  }
})

const questions = {
  type: new GraphQLList(QuestType),
  resolve:  async ()=> {
    const quests = await QuestModel.find()
    if (!quests) {
            throw new Error('error while fetching data')
    }
    return quests
  }
}

const question = {
  type: QuestType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async(root, args)=> { 
    const quest = await QuestModel.findById(args.id)
    if (!quest) {
      throw new Error('error');
    }
    return quest
  }
}

module.exports = {
  questions,
  question
}