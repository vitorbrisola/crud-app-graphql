var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLInputObjectType =require('graphql').GraphQLInputObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;



exports.Input = new GraphQLInputObjectType({
            name:'testInput',
            fields: () => ({
                id: {            
                    type: new GraphQLNonNull(GraphQLString)
                },
                questions: {
                    type: new GraphQLList(GraphQLString),
                }
            })
 	})

exports.Type = new GraphQLObjectType({
    name: 'test',
    fields:  () =>{
        return {
            id: {       type: new GraphQLNonNull(GraphQLID)     },      
            questions: {        type: new GraphQLList(GraphQLString)     }        
        }
    }
});
