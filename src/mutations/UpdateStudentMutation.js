import {
    commitMutation,
    graphql
  } from 'react-relay';
import environment from '../Environment';
  
const mutation = graphql`
    mutation UpdateStudentMutation($input: UpdateStudentInput!) {
        updateStudent(input: $input) {
            student {
                id
                name
                age
                rollNo
            }
        }
    }
`;
  
  export default (id, name, rollNo, age, callback) => {
    const variables = {
      input: {
        id,
        name,
        age,
        rollNo,
        clientMutationId: ""
      },
    }
  
    commitMutation(
      environment,
      {
        mutation,
        variables,
        optimisticUpdater: proxyStore => {
            const getId = proxyStore.get(id);
            //const newStudent = getId.getLinkedRecord('student');
            getId.setValue(name, 'name');
            getId.setValue(age, 'age');
            getId.setValue(rollNo, 'rollNo');
        },
        updater: proxyStore => {
            const updateStudentField = proxyStore.getRootField('updateStudent')
            const newStudent = updateStudentField.getLinkedRecord('student')
        
            const newName = newStudent.getValue('name');
            const newAge = newStudent.getValue('age');
            const newRollNo = newStudent.getValue('rollNo');
          
            newStudent.setValue(newName, 'name');
            newStudent.setValue(newAge, 'age');
            newStudent.setValue(newRollNo, 'rollNo');
        },
        onCompleted: () => callback(),
        onError: err => console.error(err),
      },
    )
  }