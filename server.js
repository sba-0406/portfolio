// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Serve static files (HTML, CSS, JS)
// app.use(express.static(path.join(__dirname)));

// // Example route for form POST data
// app.post('/contact', (req, res) => {
//   console.log('Form data received:', req.body);
//   res.send('Form submitted successfully!');
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//   });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('./db');  // Import PostgreSQL pool from db.js

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));  // Serve static files (CSS, JS)

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle form submission
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Insert form data into the contacts table
    const result = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id',
      [name, email, message]
    );

    console.log('Inserted row ID:', result.rows[0].id);  // Log inserted row id
    res.send('Form submitted and saved to database successfully!');
  } catch (err) {
    console.error('Error inserting into database:', err.message);
    res.status(500).send('Error saving form data');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const { Pool } = require('pg');

// const app = express();
// const PORT = 3000;

// // PostgreSQL connection pool
// const pool = new Pool({
//   user: 'your_pg_username',
//   host: 'localhost',
//   database: 'portfolio_db',
//   password: 'your_pg_password',
//   port: 5432,  // default postgres port
// });

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Serve static files (HTML, CSS, JS)
// app.use(express.static(path.join(__dirname)));

// // Route for form POST data
// app.post('/contact', async (req, res) => {
//   const { name, email, message } = req.body;
  
//   try {
//     // Insert form data into the contacts table
//     await pool.query(
//       'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
//       [name, email, message]
//     );
//     res.send('Form submitted and saved to database successfully!');
//   } catch (error) {
//     console.error('Error saving form data:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

