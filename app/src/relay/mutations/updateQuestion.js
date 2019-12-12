import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation updateQuestionMutation($input: updateQuestionInput!) {
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

    console.log(variables)

    return await new Promise((resolve, reject) => {
      commitMutation(
        environment,
        {
          mutation,
          variables,
          onCompleted: (res) => {console.log(res)},
          onError: (err) => {console.log(err)},
        })
    })  
} 


export default updateQuestion;