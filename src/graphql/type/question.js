//var GraphQLObjectType = require('graphql').GraphQLObjectType;
//var GraphQLNonNull = require('graphql').GraphQLNonNull;
//var GraphQLID = require('graphql').GraphQLID;
//var GraphQLString = require('graphql').GraphQLString;

var {GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString} = require('graphql');

/*exports.AnswerType = new GraphQLObjectType({
    name: 'answers',
    fields:  () =>{
        return {
            id: {type: new GraphQLNonNull(GraphQLID)},      
            description: {        type: GraphQLString      }
        }
    }
});*/

exports.QuestType = new GraphQLObjectType({
    name: 'question',
    fields:  () =>{
        return {
            id: {type: new GraphQLNonNull(GraphQLID)},      
            description: {        type: GraphQLString      },  
            //answers: {        type: new GraphQLList(AnswerType)     }          
        }
    }
});