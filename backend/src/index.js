// src/index.js

const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 3000;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'your_username', // replace with your PostgreSQL username
  host: 'localhost',
  database: 'your_database', // replace with your database name
  password: 'your_password', // replace with your PostgreSQL password
  port: 5433, // default PostgreSQL port
});

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost: ${port}`);
});