var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;

//import question 
var QuestModel = require('../../mongodb/schema/question');
//import GraphQL BookType
var QuestType = require('../type/question').QuestType;

// Query
exports.query = new GraphQLObjectType({
  name: 'Query',
  fields:  ()=> {
    return {
      question: {
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