var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLInputObjectType =require('graphql').GraphQLInputObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;


exports.Input = new GraphQLInputObjectType({
    name:'answerInput',
    fields: () => ({
        id: {            
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: new GraphQLNonNull(GraphQLString),
        },
        isRight: {        
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
            isRight: {        type: GraphQLBoolean     },   
        }
    }
});