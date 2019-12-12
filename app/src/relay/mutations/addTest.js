import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation addTestMutation($input: addTestInput! ) {
    addTest(input: $input) {
      id
    }  
  }
`;


const addTest = async (questions) => {
    const variables = {
      input:{
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
          onError: (err) => {console.log(err)},
        })
    })  
} 


export default addTest;