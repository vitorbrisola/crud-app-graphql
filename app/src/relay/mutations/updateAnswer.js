import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation updateAnswerMutation($input: upAnswerInput!) {
    updateAnswer(input: $input) {
      id
    }  
  }
`;


const updateAnswer = async (id,text,isCorrect) => {
    const variables = {
      input:{
        id,
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


export default updateAnswer;