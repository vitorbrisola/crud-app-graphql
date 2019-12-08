import graphql from "babel-plugin-relay/macro";

export const query = graphql`
    query questionsQuery {
      questions {
        id
        description
      }  
    }
`;

