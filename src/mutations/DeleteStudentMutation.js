import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import {ConnectionHandler} from 'relay-runtime'
  import environment from '../Environment'
  
  const mutation = graphql`
    mutation DeleteStudentMutation($input: DeleteStudentInput!) {
      deleteStudent(input: $input) {
        deletedId
      }
    }
  `;
  
  export default function DeleteStudentMutation(studentId, viewerId) {
    const variables = {
      input: {
        id: studentId,
        clientMutationId: ""
      },
    }
    commitMutation(
      environment,
      {
        mutation,
        variables,
        onError: err => console.error(err),
        updater: (proxyStore) => {
          const deleteStudentField = proxyStore.getRootField('deleteStudent')
          const deletedId = deleteStudentField.getValue('deletedId')
          const viewerProxy = proxyStore.get(viewerId)
          const connection = ConnectionHandler.getConnection(viewerProxy, 'Students_allStudents')
          ConnectionHandler.deleteNode(connection, deletedId)
        }
      },
    )
}