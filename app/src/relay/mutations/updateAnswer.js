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


export default updateAnswer;