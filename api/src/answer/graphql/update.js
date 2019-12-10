var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;

var Model = require('../mongodb/schema');
var Type = require('./type').Type;

exports.update = {
    type: Type,
    args: {
        id: {            
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: new GraphQLNonNull(GraphQLString),
        },
        isRight: {        
            type: new GraphQLNonNull(GraphQLBoolean),    
        }
    },
    resolve: async(root, args) =>{        
        const UpdatedObj = await Model.findByIdAndUpdate(args.id,args);
        if (!UpdatedObj) {
          throw new Error('Error')
        }
        return UpdatedObj;
    }
}