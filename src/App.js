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
        fetch('https://randomuser.me/api/?results=12')
        .then(response => response.json()) // turn it into js object
        .then(data => {
            this.setState(() => {
                return {
                    employeeList: data.results
                }
            })

        });

    }

    render(){
        let employeeComponents = [];
        if(this.state.employeeList.length !== 0 ){
            employeeComponents = this.state.employeeList.map(employee => <Employee key={employee.id.value} employeeInfo={employee} /> );
        }
        
 
        return (
            <div className='container'>
                <Title />
                {employeeComponents.length !== 0 && employeeComponents}
                {console.log(this.state.employeeList)}
            </div>
        );
    }
}

export default App;

