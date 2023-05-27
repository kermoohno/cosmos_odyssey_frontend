import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = ({ originPlanet, destinationPlanet }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleReservationSubmit = (event) => {
        event.preventDefault();

        setFirstName('');
        setLastName('');
    };

    return (
        <div className="reservation-form-container">
            <h2>Reservation Form</h2>
            <div className="travel-info">
                <p>
                    Traveling from <span>{originPlanet}</span> to <span>{destinationPlanet}</span>
                </p>
            </div>
            <form onSubmit={handleReservationSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <button type="submit">Make Reservation</button>
            </form>
        </div>
    );
};

export default ReservationForm;
