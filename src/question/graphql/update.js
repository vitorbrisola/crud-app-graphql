var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;


var QuestModel = require('../mongodb/schema');
var QuestType = require('./type').Type;

exports.update = {
    type: QuestType,
    args: {
        id: {            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve: async(root, args) =>{        
        const UpdatedObj = await QuestModel.findByIdAndUpdate(args.id,args);
        if (!UpdatedObj) {
          throw new Error('Error')
        }
        return UpdatedObj;
    }
}