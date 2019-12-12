var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLInputObjectType =require('graphql').GraphQLInputObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;

exports.addInput = new GraphQLInputObjectType({
    name:'addQuestionInput',
    fields: () => ({
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        answers: {
            type: new GraphQLList(GraphQLID),
        }
    })
})


exports.upInput = new GraphQLInputObjectType({
            name:'upQuestionInput',
            fields: () => ({
                id: {            
                    type: new GraphQLNonNull(GraphQLID)
                },
                description: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                answers: {
                    type: new GraphQLList(GraphQLID),
                }
            })
 	})

exports.Type = new GraphQLObjectType({
    name: 'question',
    fields:  () =>{
        return {
            id: {       type: new GraphQLNonNull(GraphQLID)     },      
            description: {        type: GraphQLString      },  
            answers: {        type: new GraphQLList(GraphQLID)     }        
        }
    }
});
