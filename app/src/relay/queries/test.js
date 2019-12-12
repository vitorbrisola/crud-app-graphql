import graphql from "babel-plugin-relay/macro";
import {fetchQuery} from 'relay-runtime';

import environment from '../Environment';


const query = graphql`
  query testQuery($input: ID!){
    test(id: $input) {
      questions
    }  
  }
`;

const TestQuery = (id) => {

  const variables = {
    input: id
  }


  return new Promise((resolve, reject) => {
      fetchQuery(environment, query, variables)
          .then(data => {
              resolve(data)
          })
          .catch(err => reject(err));
  })
}

export default TestQuery;