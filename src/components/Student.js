import React from 'react';
import DeleteStudentMutation from '../mutations/DeleteStudentMutation';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

class Student extends React.Component {
    _handleDelete = () => {
        DeleteStudentMutation(this.props.student.id, this.props.viewer.id);
    }

    render() {
        const { student } = this.props;

        return (
            <tr key={student.id}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td 
                    onClick={this._handleDelete} 
                    style={{cursor: "pointer"}}>
                        <i className="material-icons">delete</i>
                </td>
                <td>
                    <Link to={`/update/${student.id}`}>
                        <i className="material-icons">system_update_alt</i>
                    </Link>
                </td>
            </tr>
        );
    }
}

export default createFragmentContainer(Student, {
    viewer: graphql`fragment Student_viewer on Viewer {
        id
    }`,
    student: graphql`fragment Student_student on Student {
        id
        rollNo
        name
        age
    }`
});