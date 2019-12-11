var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;


var QuestModel = require('../mongodb/schema');
var QuestType = require('./type').Type;
var QuestInputType = require('./type').updateInput;

exports.update = {
    type: QuestType,
    args: {
        input: {            
            type: new GraphQLNonNull(QuestInputType)
        }
    },
    resolve: async(root, args) =>{        
        const UpdatedObj = await QuestModel.findByIdAndUpdate(args.input.id,args.input);
        if (!UpdatedObj) {
          throw new Error('Error')
        }
        return UpdatedObj;
    }
}