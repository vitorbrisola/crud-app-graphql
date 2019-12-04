var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

//import book model 
var bookModel = require('../../../mongodb/schema/book');
//import GraphQL BookType
var bookType = require('../../type/book');


exports.removeBook = {
  type: bookType.bookType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async(root, args)=> {
    const removedBook = await bookModel.findByIdAndRemove(args.id)
    if (!removedBook) {
      throw new Error('error')
    }
    return removedBook;
  }
}