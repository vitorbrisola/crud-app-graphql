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
          if (props) {
            console.log(props.questions);
            const questList = props.questions;
            return (<div><p>Question ID: {questList[0].id}</p> <p>Description: {questList[0].description}</p></div>);
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}
