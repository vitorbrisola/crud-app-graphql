var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

//import book model 
var bookModel = require('../../../mongodb/schema/book');
//import GraphQL BookType
var bookType = require('../../type/book');

exports.updateBook = {
    type: bookType.bookType,
    args: {
        id: {            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        author: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve: async(root, args) =>{        const UpdatedBook = await bookModel.findByIdAndUpdate(args.id,args);
        if (!UpdatedBook) {
          throw new Error('Error')
        }
        return UpdatedBook;
    }
}