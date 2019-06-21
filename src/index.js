import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import AddDetail from './components/AddDetail';
import UpdateStudent from './components/UpdateStudent';
import './index.css';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/add" component={AddDetail} />
        <Route path="/update/:id" component={UpdateStudent} />
    </Router>, 
    document.getElementById('root')
);