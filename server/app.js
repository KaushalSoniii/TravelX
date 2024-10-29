const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
dotenv.config();

// Connect Database
connectDB();

const app = express();
app.use(express.json({ extended: false }));

// Basic route for testing
app.get('/', (req, res) => res.send('Welcome to TravelX'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/campsites', require('./routes/campsites'));

// Set up port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
