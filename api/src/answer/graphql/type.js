var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;

exports.Type = new GraphQLObjectType({
    name: 'answer',
    fields:  () =>{
        return {
            id: {       type: new GraphQLNonNull(GraphQLID)     },      
            text: {        type: GraphQLString      },  
            isRight: {        type: GraphQLBoolean     },   
        }
    }
});