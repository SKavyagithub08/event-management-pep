// src/ParticipateEventForm.js
import React, { useState } from 'react';

const ParticipateEventForm = ({ onSubmit }) => {
    const [participantDetails, setParticipantDetails] = useState({
        eventId: '',
        participantName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParticipantDetails({
            ...participantDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(participantDetails);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Event ID:</label>
                <input type="text" name="eventId" value={participantDetails.eventId} onChange={handleChange} required />
            </div>
            <div>
                <label>Participant Name:</label>
                <input type="text" name="participantName" value={participantDetails.participantName} onChange={handleChange} required />
            </div>
            <button type="submit">Participate</button>
        </form>
    );
};

export default ParticipateEventForm;