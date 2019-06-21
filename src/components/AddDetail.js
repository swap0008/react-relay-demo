import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Link, withRouter } from 'react-router-dom';
import CreateStudentMutation from '../mutations/AddDetailMutation';
import environment from '../Environment';

const query = graphql`
    query AddDetailQuery {
        viewer {
            id
        }
    }
`;

class AddDetail extends Component {
    state = {
        rollNo: '',
        name: '',
        age: ''
    }

    _createStudent = (id) => {
        const { rollNo, name, age } = this.state;
        CreateStudentMutation(id, parseInt(rollNo), name, parseInt(age), () => this.props.history.replace('/'));
    }

    render() {
        const { rollNo, name, age } = this.state;

        return (
            <QueryRenderer
                environment={environment}
                query={query}
                render={({error, props}) => {
                if (error) {
                    return <div>Error!</div>;
                }
                if (!props) {
                    return <div>Loading...</div>;
                }
                return (
                    <div style={{width:"500px", margin: 'auto'}}>
                        <h1>Add Student</h1>
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
                            onClick={() => this._createStudent(props.viewer.id)}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <Link to="/">
                            <button className="btn waves-effect waves-light" type="submit" name="action" style={{marginLeft: "10px"}}>
                                Go Back
                                <i className="material-icons right">arrow_back</i>
                            </button>
                        </Link>
                    </div>
                    );
                }}
            />
        );
    }
}

export default withRouter(AddDetail);