import React from 'react';
import { QueryRenderer} from 'react-relay';
import Environment from '../../relay/Environment'; 
import graphql from "babel-plugin-relay/macro";

export default class GraphQLApp extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={Environment}
        query={graphql`
          query questionQuery {
            questions {
              id
              description
            }  
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
	    console.log(error);
            return <div>Erro: {error.message}</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (<div><p>Question ID: {props.question.id}</p> <p>Description: {props.question.description}</p></div>);
        }}
      />
    );
  }
}
