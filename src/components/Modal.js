import React from 'react';

function Modal(props) {
    return (
        <div className='bg-modal'>
            <div className='modal-content'>
                <i className="fas fa-times" onClick={props.handleCloseModal}></i>
                <div className='modal-image'>
                    <img src={props.modalInfo.picture.medium} alt={`${props.modalInfo.name.title} ${props.modalInfo.name.first}`}/>
                </div>
                <div className='modal-info'>
                    <p className='name'>{props.modalInfo.name.first} {props.modalInfo.name.last}</p>
                    <p className='email'>{props.modalInfo.email}</p>
                    <p className='place'>{props.modalInfo.location.city}</p>
                </div>
                <hr />
                <div className='modal-more-info'>
                    <p className='number'>{props.modalInfo.cell}</p>
                    <p className='address'>{`${props.modalInfo.location.street}, ${props.modalInfo.location.state}`}</p>
                    <p className='postcode'>{props.modalInfo.location.postcode}</p>
                    <p className='birthday'>{props.modalInfo.dob.date}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;