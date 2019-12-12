var GraphQLNonNull = require('graphql').GraphQLNonNull;

var Model = require('../mongodb/schema');
var Type = require('./type').Type;
var InputType = require('./type').Input;

exports.add = {
  type: Type,
  args: {
    input: {            
      type: new GraphQLNonNull(InputType)
    }
  },
  resolve: async(root, args)=> { 
    
    //under the resolve method we get our arguments
    const qModel = new Model(args.input);
    const newQuest = await qModel.save();
    if (!newQuest) {
      throw new Error('error');
    }
    return newQuest
  }
}