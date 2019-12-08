import {fetchQuery} from 'relay-runtime';
import graphql from "babel-plugin-relay/macro";
import environment from './Environment';

const query = graphql`
    query queryQuery {
      questions {
        id
        description
      }  
    }
`;

const variables = {
  pageID: '110798995619330',
};


const RelayQuery = () => {
    return new Promise((resolve, reject) => {
        fetchQuery(environment, query, variables)
            .then(data => {
                resolve(data)
            })
            .catch(err => reject(err));
    })

}

export default RelayQuery

