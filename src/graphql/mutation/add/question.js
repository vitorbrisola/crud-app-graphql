var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

//import book model 
var QuestModel = require('../../../mongodb/schema/question');
//import GraphQL BookType
var QuestType = require('../../type/question').QuestType;
var AnswerType = require('../../type/question').AnswerType;


exports.addQuest = {
  type: QuestType,
/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
  args: {
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    answers: {
        type: new GraphQLNonNull(GraphQLString),
      }
  },
  resolve: async(root, args)=> { 
    
    //under the resolve method we get our arguments
    const uModel = new bookModel(args);
    const newBook = await uModel.save();
    if (!newBook) {
      throw new Error('error');
    }
    return newBook
  }
}