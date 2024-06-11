// Create web server and listen on port 3000
// Create a new comment
// Get all comments
// Get a single comment
// Update a comment
// Delete a comment

// Require the express module
const express = require('express');

// Create a new express application
const app = express();

// Use the express.json middleware
app.use(express.json());

// Set the port for the server
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  // Log the request body
  console.log(req.body);
  // Send back the request body
  res.send(req.body);
});

// Get all comments
app.get('/comments', (req, res) => {
  // Send back a message
  res.send('Get all comments');
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  // Send back a message
  res.send('Get a single comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  // Log the request body
  console.log(req.body);
  // Send back the request body
  res.send(req.body);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  // Send back a message
  res.send('Delete a comment');
});

// Listen on the port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
