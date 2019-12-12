import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation updateQuestionMutation($input: upQuestionInput!) {
    updateQuestion(input: $input) {
      id
    }  
  }
`;


const updateQuestion = async (id,description,answers) => {
    const variables = {
      input:{
        id,
        description,
        answers
      }
    }

    return await new Promise((resolve, reject) => {
      commitMutation(
        environment,
        {
          mutation,
          variables,
          onCompleted: (res) => {resolve(res)},
          onError: (err) => {reject(err)},
        })
    })  
} 


export default updateQuestion;