import graphql from "babel-plugin-relay/macro";
import {fetchQuery} from 'relay-runtime';

import environment from '../Environment';


const query = graphql`
  query testsQuery{
    tests {
        id   
    }  
  }
`;

const variables = {}

const TestsQuery = () => {
  return new Promise((resolve, reject) => {
      fetchQuery(environment, query, variables)
          .then(data => {
              resolve(data)
          })
          .catch(err => reject(err));
  })
}

export default TestsQuery;