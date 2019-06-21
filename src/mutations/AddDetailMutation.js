import {
    commitMutation,
    graphql
} from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../Environment';

const mutation = graphql`
    mutation AddDetailMutation($input: CreateStudentInput!) {
        createStudent(input: $input) {
            student {
                rollNo
                name
                age
            }
        }
    }
`;

let tempID = 0;

export default (id, rollNo, name, age, callback) => {
    const variables = {
        input : {
            rollNo,
            name,
            age,
            clientMutationId: ""
        }
    };

    commitMutation(
        environment,
        {
            mutation,
            variables,
            optimisticUpdate: (store) => {
                //Creating a new student as a mock
                const id = 'client:newStudent:' + tempID++;
                const newStudent = store.create(id, 'Detail');
                newStudent.setValue(id, 'id');
                newStudent.setValue(name, 'name');        
                newStudent.setValue(age, 'age');
                newStudent.setValue(rollNo, 'rollNo');
                
                //Updating the store with the mock data
                const student = store.get(id);
                const connection = ConnectionHandler.getConnection(student, 'Students_allStudents');
                if (connection) {
                    ConnectionHandler.insertEdgeAfter(connection, newStudent);
                }
            },
            updater: (store) => {
                // Retrieve new post from the server
                const createStudentField = store.getRootField('createStudent');
                const newStudent = createStudentField.getLinkedRecord('student');


                //Updating the store with the server responsed data
                const student = store.get(id);
                const connection = ConnectionHandler.getConnection(student, 'Students_allStudents');
                if (connection) {
                    ConnectionHandler.insertEdgeAfter(connection, newStudent);
                }
            },
            onCompleted: callback,
            onError: (err) => console.log(err)
        }
    )
}