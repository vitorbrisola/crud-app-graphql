var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLInputObjectType =require('graphql').GraphQLInputObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;


exports.addInput = new GraphQLInputObjectType({
    name:'addAnswerInput',
    fields: () => ({
        text: {
            type: new GraphQLNonNull(GraphQLString),
        },
        isCorrect: {        
            type: new GraphQLNonNull(GraphQLBoolean),    
        }  
    })
})

exports.upInput = new GraphQLInputObjectType({
    name:'upAnswerInput',
    fields: () => ({
        id: {            
            type: new GraphQLNonNull(GraphQLID)
        },
        text: {
            type: new GraphQLNonNull(GraphQLString),
        },
        isCorrect: {        
            type: new GraphQLNonNull(GraphQLBoolean),    
        }  
    })
})

exports.Type = new GraphQLObjectType({
    name: 'answer',
    fields:  () =>{
        return {
            id: {       type: new GraphQLNonNull(GraphQLID)     },      
            text: {        type: GraphQLString      },  
            isCorrect: {        type: GraphQLBoolean     },   
        }
    }
});
