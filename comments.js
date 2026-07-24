// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
    const { author, text } = req.body;
    if (!author || !text) {
        return res.status(400).json({ error: 'Author and text are required' });
    }