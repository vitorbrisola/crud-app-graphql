var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLInputObjectType =require('graphql').GraphQLInputObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;


exports.addInput = new GraphQLInputObjectType({
    name:'addTestInput',
    fields: () => ({
        questions: {
            type: new GraphQLList(GraphQLID),
        }
    })
})

exports.upInput = new GraphQLInputObjectType({
            name:'upTestInput',
            fields: () => ({
                id: {            
                    type: new GraphQLNonNull(GraphQLID)
                },
                questions: {
                    type: new GraphQLList(GraphQLID),
                }
            })
 	})

exports.Type = new GraphQLObjectType({
    name: 'test',
    fields:  () =>{
        return {
            id: {       type: new GraphQLNonNull(GraphQLID)     },      
            questions: {        type: new GraphQLList(GraphQLID)     }        
        }
    }
});
