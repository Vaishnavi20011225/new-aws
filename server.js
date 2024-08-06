const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET endpoint
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define another GET endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
