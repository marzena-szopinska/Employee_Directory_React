import React from 'react';

function Modal(props) {
    return (
        <div className='employee-modal-box'>
            <div className='employee-modal-image'>
                <img src={props.employeeInfo.picture.medium} alt={`${props.employeeInfo.name.title} ${props.employeeInfo.name.first}`}/>
            </div>
            <div className='employee-modal-info'>
                <p className='name'>{props.employeeInfo.name.first} {props.employeeInfo.name.last}</p>
                <p className='email'>{props.employeeInfo.email}</p>
                <p className='place'>{props.employeeInfo.location.city}</p>
            </div>
            <hr />
            <div className='modal-more-info'>
                <p className='number'>{props.employeeInfo.cell}</p>
                <p className='address'>{`${props.employeeInfo.location.street}, ${props.employeeInfo.location.state}`}</p>
                <p className='postcode'>{props.employeeInfo.location.postcode}</p>
                <p className='birthday'>{props.employeeInfo.dob.date}</p>
            </div>
        </div>
    );
}

export default Modal;