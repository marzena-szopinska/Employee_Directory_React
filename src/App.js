import React from 'react';
import './App.css';
import Employee from './components/Employee';
import Title from './components/Title';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        // fetch employees

    }

    render(){
        return (
            <div className='container'>
                <Title />
                <Employee />
            </div>
        );
    }
}

export default App;

