import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation addAnswerMutation($input: addAnswerInput! ) {
    addAnswer(input: $input) {
      id
    }  
  }
`;


const addAnswer = async (text,isCorrect) => {
    const variables = {
      input:{
        text,
        isCorrect
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


export default addAnswer;