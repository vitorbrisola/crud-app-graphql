import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation addQuestionMutation($input: String! ) {
    addQuestion(description: $input) {
      id
    }  
  }
`;


const addQuestion = async (description) => {
    const variables = {
      input:description
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


export default addQuestion;