import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import Students from './Students';

import environment from '../Environment';

const AppQuery = graphql`
  query AppAllStudentsQuery {
    viewer {
      ...Students_students
    }
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <Students students={props.viewer}/>;
        }}
      />
    );
  }
}