import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation updateTestMutation($input: upTestInput!) {
    updateTest(input: $input) {
      id
    }  
  }
`;


const updateTest = async (id,questions) => {
    const variables = {
      input:{
        id,
        questions
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


export default updateTest;