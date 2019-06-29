import React from 'react';

function Employee(props) {
    return (
        <div className='employee-box'>
            <div className='employee-image'>
                <img src='#' alt=''/>
            </div>
            <div className='employee-info'>
                <p className='name'>Name</p>
                <p className='email'>Email</p>
                <p className='place'>Place</p>
            </div>
        </div>
    );
}

export default Employee;