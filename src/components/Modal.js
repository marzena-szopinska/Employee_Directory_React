import React from 'react';

class Modal extends React.Component {

    formBirthdayDate(str) {
        let originalDate = str;
        let dateWithoutTime = originalDate.slice(0, 10);
        const day = dateWithoutTime.slice(8, 10);
        const month = dateWithoutTime.slice(5, 7);
        const year = dateWithoutTime.slice(0, 4);
        const europeBirthDate = `${day}/${month}/${year}`;

        return europeBirthDate;

    }

    render() {
        return (
            <div className='bg-modal'>
                <div className='modal-content'>
                    <i className="fas fa-times" onClick={this.props.handleCloseModal}></i>
                    <div className='modal-image'>
                        <img src={this.props.modalInfo.picture.medium} alt={`${this.props.modalInfo.name.title} ${this.props.modalInfo.name.first}`}/>
                    </div>
                    <div className='modal-info'>
                        <p className='name'>{this.props.modalInfo.name.first} {this.props.modalInfo.name.last}</p>
                        <p className='email'>{this.props.modalInfo.email}</p>
                        <p className='place'>{this.props.modalInfo.location.city}</p>
                    </div>
                    <hr />
                    <div className='modal-more-info'>
                        <p className='number'>{this.props.modalInfo.cell}</p>
                        <p className='address'>{`${this.props.modalInfo.location.street}, ${this.props.modalInfo.location.state}`}</p>
                        <p className='postcode'>{this.props.modalInfo.location.postcode}</p>
                        <p className='birthday'>{this.formBirthdayDate(this.props.modalInfo.dob.date)}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Modal;