import React, { Component } from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import { withRouter } from 'react-router-dom';
import environment from '../Environment';
import UpdateStudentMutation from '../mutations/UpdateStudentMutation';

const query = graphql`
    query UpdateStudentQuery($id: ID!) {
        viewer {
            Student(id: $id) {
                id
                name
                age
                rollNo
            }
        }
    }
`;

class UpdateStudent extends Component {
    state = {
        id: '',
        rollNo: '',
        name: '',
        age: ''
    }

    _updateStudent = () => {
        const { rollNo, name, age } = this.state;
        UpdateStudentMutation(this.props.match.params.id, name, parseInt(rollNo), parseInt(age), () => this.props.history.replace('/'));
    }

    _setDefaultValue = ({id, rollNo, age, name}) => {
        this.setState({
            id,
            rollNo,
            age,
            name
        });
    }

    render() {
        const { rollNo, name, age } = this.state;

        return (
            <QueryRenderer
                environment={environment}
                query={query}
                variables={{
                    id: this.props.match.params.id
                }}
                render={({error, props}) => {
                if (error) {
                    return <div>Error!</div>;
                }
                if (!props) {
                    return <div>Loading...</div>;
                }
                return (
                    <div style={{backgroundColor: "rgba(0,0,0,0.5)", height: '100vh'}}>
                        <div className="modal-content">
                            <span className="close" onClick={() => this.props.history.replace('/')}>&times;</span>
                            <div style={{width:"500px", margin: 'auto'}}>
                                <h1>Update Student</h1>
                                <input 
                                    type="text" 
                                    placeholder="rollNo" 
                                    value={rollNo} 
                                    onChange={(e) => this.setState({rollNo: e.target.value})}/>
                                <input 
                                    type="text" 
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => this.setState({name: e.target.value})}/>
                                <input 
                                    type="text" 
                                    placeholder="age"
                                    value={age}
                                    onChange={(e) => this.setState({age: e.target.value})}/>
                                <button 
                                    className="btn waves-effect waves-light" 
                                    type="submit" 
                                    name="action"
                                    onClick={this._updateStudent}>Update
                                    <i className="material-icons right">send</i>
                                </button>
                                <button 
                                    style={{marginLeft: '20px'}}
                                    className="btn waves-effect waves-light" 
                                    type="submit" 
                                    name="action"
                                    onClick={() => this._setDefaultValue(props.viewer.Student)}>Default Value
                                    <i className="material-icons right">assignment_return</i>
                                </button>
                            </div>
                        </div>
                    </div>
                );
                }}
            />
        );
    }
}

export default withRouter(UpdateStudent);