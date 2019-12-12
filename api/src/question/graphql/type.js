var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLInputObjectType =require('graphql').GraphQLInputObjectType;


exports.updateInput = new GraphQLInputObjectType({
            name:'updateQuestionInput',
            fields: () => ({
                id: {            
                    type: new GraphQLNonNull(GraphQLString)
                },
                description: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                answers: {
                    type: new GraphQLList(GraphQLString),
                }
            })
 	})

exports.Type = new GraphQLObjectType({
    name: 'question',
    fields:  () =>{
        return {
            id: {       type: new GraphQLNonNull(GraphQLID)     },      
            description: {        type: GraphQLString      },  
            answers: {        type: new GraphQLList(GraphQLString)     }        
        }
    }
});
