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


const addQuestion = (description) => {
    const variables = {
      input:description
    }

    console.log(variables)

    return new Promise((resolve, reject) => {
      commitMutation(
        environment,
        {
          mutation,
          variables,
          onError: (err) => {console.log(err)},
        }
      )
        .then(res => resolve(res))
        .catch(err => reject(err));
    })  
} 


export default addQuestion;