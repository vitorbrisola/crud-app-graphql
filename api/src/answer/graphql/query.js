var GraphQLList = require('graphql').GraphQLList;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLNonNull = require('graphql').GraphQLNonNull;

//import book model 
var Model = require('../mongodb/schema');
//import GraphQL BookType
var Type = require('./type').Type;



const answers = {
  type: new GraphQLList(Type),
  resolve:  async ()=> {
    const data = await Model.find()
    if (!data) {
            throw new Error('error while fetching data')
    }
    return data
  }
}

const answer = {
  type: Type,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async(root, args)=> { 
    const data = await Model.findById(args.id)
    if (!data) {
      throw new Error('error');
    }
    return data
  }
}

module.exports = {
  answers,
  answer
}