import {fetchQuery} from 'relay-runtime';


import environment from './Environment';
import {query} from './schemas/questions'


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

