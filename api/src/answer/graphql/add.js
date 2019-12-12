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
    const dataModel = new Model(args.input);
    const newData = await dataModel.save();
    if (!newData) {
      throw new Error('error');
    }
    return newData
  }
}