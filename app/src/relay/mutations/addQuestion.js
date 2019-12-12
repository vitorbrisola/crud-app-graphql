import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation addQuestionMutation($input: addQuestionInput! ) {
    addQuestion(input: $input) {
      id
    }  
  }
`;


const addQuestion = async (description,answers) => {
    const variables = {
      input:{
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
          onError: (err) => {console.log(err)},
        })
    })  
} 


export default addQuestion;