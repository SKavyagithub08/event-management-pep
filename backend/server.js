import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config({ path: "./config/config.env" });


app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
})
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let events = [];
let users = [];

app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);
    res.status(201).send(event);
});

app.post('/participate', (req, res) => {
    const participant = req.body;
    // Add participant to event
    res.status(201).send(participant);
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(401).send('Invalid credentials');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});