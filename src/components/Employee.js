import React from 'react';

function Employee(props) {
    return (
        <div className='employee-box'>
            <div className='employee-image'>
                <img src={props.picture.medium} alt={`${props.name.title} ${props.name.first}`}/>
            </div>
            <div className='employee-info'>
                <p className='name'>{props.name.first} {props.name.last}</p>
                <p className='email'>{props.email}</p>
                <p className='place'>{props.location.city}</p>
            </div>
        </div>
    );
}

export default Employee;