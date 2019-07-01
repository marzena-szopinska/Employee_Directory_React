import React from 'react';
import './App.css';
import Employee from './components/Employee';
import Title from './components/Title';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            employeeList: []
        };
    }

    
    componentDidMount() {
        // fetch employees
        fetch('https://randomuser.me/api/?results=12')
        .then(response => response.json())
        .then(data => {
            this.setState(() => {
                return {
                    employeeList: data.results
                }
            })
        });

        setTimeout(() => {
            this.setState(() => {
                return {
                    loading: false
                }
            })
        }, 1500);
    }

    render(){
        console.log(this.state.employeeList);

        return (
            <div className='container'>
                <Title />
                {
                    this.state.loading ? <h2 className='load-page'>Loading...</h2> : 
                    this.state.employeeList.map(employee => <Employee key={`${employee.name.title} ${employee.name.first}`} employeeInfo={employee} />)
                }
            </div>
        );
    }
}

export default App;

