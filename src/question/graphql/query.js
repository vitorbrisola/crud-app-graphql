var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;

//import book model 
var QuestModel = require('../mongodb/schema').Model;
//import GraphQL BookType
var QuestType = require('./type').Type;

// Query
exports.Query = new GraphQLObjectType({
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