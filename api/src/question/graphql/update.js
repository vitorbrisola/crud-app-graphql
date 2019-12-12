var GraphQLNonNull = require('graphql').GraphQLNonNull;


var Model = require('../mongodb/schema');
var Type = require('./type').Type;
var InputType = require('./type').upInput;

exports.update = {
    type: Type,
    args: {
        input: {            
            type: new GraphQLNonNull(InputType)
        }
    },
    resolve: async(root, args) =>{        
        const UpdatedObj = await Model.findByIdAndUpdate(args.input.id,args.input);
        if (!UpdatedObj) {
          throw new Error('Error')
        }
        return UpdatedObj;
    }
}