import React from 'react';
import './App.css';
import Employee from './components/Employee';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            employeeList: [],
            displayModal: false,
            modalInfo: {}
        };

        this.handleClick = this.handleClick.bind(this);
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

    handleClick(id) {
        this.setState(() => {
            return {
                displayModal: true
            }
        })

        this.setState((prevState) => {
            const modalInfoToPass = prevState.employeeList.filter(employee => {
                if(`${employee.name.first} ${employee.name.last}` === id){
                    return employee;
                }
            })
            return {
                modalInfo: modalInfoToPass
            }
        })

       
    }

    render(){
        console.log(this.state.employeeList);
        console.log(this.state.modalInfo);

        return (
            <div className='container'>
                <Header />
                <main>
                    {
                        this.state.loading ? <h2 className='load-page'>Loading...</h2> : 
                        this.state.employeeList.map(employee => 
                            <Employee key={`${employee.name.title}
                             ${employee.name.last}`} 
                             employeeInfo={employee}
                             handleClick={this.handleClick}
                             />)
                    }
                </main>
                <Footer />
                {/*this.state.displayModal && <Modal moreInfo={this.state.modalInfo}/>*/}
            </div>
        );
    }
}

export default App;

