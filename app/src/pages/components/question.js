import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import Environment from '../../relay/Environment'; 

export default class GraphQLApp extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={Environment}
        query={graphql`
          query questionQuery {
            question {
              id
              description
            }  
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
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
