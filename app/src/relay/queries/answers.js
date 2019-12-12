import graphql from "babel-plugin-relay/macro";
import {fetchQuery} from 'relay-runtime';

import environment from '../Environment';


const query = graphql`
  query answersQuery{
    answers {
        id   
    }  
  }
`;

const variables = {}

const AnswersQuery = () => {
  return new Promise((resolve, reject) => {
      fetchQuery(environment, query, variables)
          .then(data => {
              resolve(data)
          })
          .catch(err => reject(err));
  })
}

export default AnswersQuery;