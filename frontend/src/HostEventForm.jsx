// src/HostEventForm.js
import React, { useState } from 'react';

const HostEventForm = ({ onSubmit }) => {
    const [eventDetails, setEventDetails] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
        host: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(eventDetails);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={eventDetails.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="datetime-local" name="date" value={eventDetails.date} onChange={handleChange} required />
            </div>
            <div>
                <label>Location:</label>
                <input type="text" name="location" value={eventDetails.location} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={eventDetails.description} onChange={handleChange} required />
            </div>
            <div>
                <label>Host:</label>
                <input type="text" name="host" value={eventDetails.host} onChange={handleChange} required />
            </div>
            <button type="submit">Host Event</button>
        </form>
    );
};

export default HostEventForm;