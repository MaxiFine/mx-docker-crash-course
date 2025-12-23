const express = require('express');
const app = express();
const port = 3500;

// Simple route
app.get('/', (req, res) => {
    res.send('<h1>Hello from Node.js! This app is containerized with Docker. \n Now Multi-stage Builds</h1>');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`App running on http://localhost:${port}`);
});