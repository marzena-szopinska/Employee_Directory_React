import React from 'react';

function Employee(props) {
    return (
        <div className='employee-box' onClick={() => props.handleOpenModal(props.employeeInfo)}>
            <div className='employee-image'>
                <img src={props.employeeInfo.picture.medium} alt={`${props.employeeInfo.name.title} ${props.employeeInfo.name.first}`}/>
            </div>
            <div className='employee-info'>
                <p className='name'>{props.employeeInfo.name.first} {props.employeeInfo.name.last}</p>
                <p className='email'>{props.employeeInfo.email}</p>
                <p className='place'>{props.employeeInfo.location.city}</p>
            </div>
        </div>
    );
}

export default Employee;