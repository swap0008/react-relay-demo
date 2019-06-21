import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';
import Student from './Student';

class Students extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    {/* <input 
                        type="text" 
                        placeholder="Search by ID..."
                    /> */}
                    <h1>Student Details</h1>
                    <Link to="/add">
                        <h5>Add Student +</h5>
                    </Link>
                </div>
                <table className="centered striped">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        {this.props.students.allStudents.edges.map(({node}) => (
                            <Student student={node} viewer={this.props.students} update={this._handleUpdate} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default createFragmentContainer(Students, {
    students: graphql`fragment Students_students on Viewer {
        ...Student_viewer
        allStudents(last: 100) @connection(key: "Students_allStudents", filters: []) {
            edges {
                node {
                    ...Student_student
                }
            }
        }
    }`
});