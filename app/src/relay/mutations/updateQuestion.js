import graphql from "babel-plugin-relay/macro";
import {commitMutation} from 'relay-runtime';
import environment from "../Environment";

const mutation = graphql`
  mutation updateQuestionMutation($input: String! ) {
    updateQuestion(id: $input) {
      id
      description
    }  
  }
`;


const updateQuestion = async (id) => {
    const variables = {
      input:id
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