require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Routes
const apiRoutes = require('./src/routes/apiRoutes');
app.use(BASE_URI, apiRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`BaseURI: http://localhost:${PORT}${BASE_URI}`);
});




